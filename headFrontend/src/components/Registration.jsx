import React, { useState } from 'react'
import "./registration.css"
import { useNavigate } from 'react-router-dom'


const Registration = () => {

const navigate = useNavigate();

const [registration, setRegistration] = useState({
  fullname: "",
  email: "",
  password: ""
});


function handleChange(name, value){
  setRegistration((prev) => ({
    ...prev,
    [name]: value
  }))
}

async function handleSubmit(e){
  e.preventDefault();
  try {
       const response = await fetch("https://headphone-fullstack-project-1.onrender.com/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify(registration),
    });
    if(response.ok){
      // console.log("data has sended successfully")
      navigate('/home');
    }else {
      const errorData = await response.json();
      // console.log("error response from server", errorData)
      alert("ccokie nhi aayi");
    }
  } catch (error) {
    // console.log("Error h fetch mai", error)
  }
}



  return (
    <div className='registration'>
        <p>Brand</p>
            <p>welcome to <span>Brand</span></p>
            <p>create your account</p>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Full Name*' name='fullname' value={registration.fullname} required  onChange={(e) => handleChange(e.target.name, e.target.value)}/>
            <input type="email" placeholder='Email*'name='email' value={registration.email} required onChange={(e) => handleChange(e.target.name, e.target.value)}/>
            <input type="password" placeholder='Password*' name='password' value={registration.password} required onChange={(e) => handleChange(e.target.name, e.target.value)}/>
            <button type='submit'>Create Account</button>
            </form>
    </div>
  )
}

export default Registration