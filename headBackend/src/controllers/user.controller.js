import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



const registerUser = async(req, res) =>{
    
    try {
        let {email, password, fullname} = req.body;

        if(
            [fullname, email, password].some((field) =>  
            field?.trim() === "")
        ){
            // console.log("one or more fields are empty or contain only spaces");
            return res.status(400).send({ error: "All fields are required"});
        }

        const existedUser = await User.findOne({email});
        if(existedUser){
            return res.status(409).send({ error: "User with this email already exist"})
        }

        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async(err, hash) => {
                if(err) return res.status(400).send(err.message);
                else{
                    let user = await User.create({
                        fullname: fullname.toLowerCase(),
                        email,
                        password: hash
                        
                    });

                    let token = jwt.sign({email, userid: user._id}, process.env.JWT_KEY);
                    res.cookie('token', token, {
                        httpOnly: true,
                        secure: true,
                        sameSite: 'None',
                        maxAge: 3600000,
                    });
                    res.status(201).send({message: "User registered Successfully"});
                    // console.log(token);
                    // console.log("sab chal rha user create");
       
                }
               
            })
        })
        
    } catch (error) {
        // console.log("error h bhai ", error);
        res.status(500).send({error: "Internal server error"});
    }
}


const loginUser = async(req,res) => {
    let { email, password } = req.body;

    let user = await User.findOne({ email });
    if(!user) return res.status(400).send("Email or password is incorrect");

    bcrypt.compare(password, user.password, function(err, result) {
        if(err) return res.status(400).send("Email or password is incorrect")
        
            let token = jwt.sign({email, userid: user._id}, process.env.JWT_KEY);
            res.cookie('token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'None',
                maxAge: 3600000,
                // domain: '.onrender.com'
            });
            // console.log("cookie bhej di");
            res.status(201).send({message: "You can login"});
            
    });
};


const logoutUser = async(req, res) => {
    res.cookie("token", "");
    res.status(200).send("logout successfully");
}


const checkUser = (req, res) => {
    const token = req.cookies.token;
    
    if (!token) {
        // console.log("token hi nhi aa rha yha pe")
       return res.sendStatus(401).send('Unauthorized');

    } 
    
    // console.log("token a gya", token);
    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if(err) return res.sendStatus(403).send('Forbidden');
         res.status(200).json({message: "Authenticated"});
    });
};


const message = async(req, res) => {
    const { fullname, email, mssg } = req.body;

    try {
        const user = await User.findOne({ email, fullname });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        user.messages.push({ content: mssg });
        await user.save();

        res.status(200).json({ message: "Message submitted successfully" });
    } catch (error) {
        // console.error("Error submitting message:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}



export {registerUser, loginUser, logoutUser, checkUser, message}