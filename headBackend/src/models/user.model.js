import mongoose, {Schema} from "mongoose";

const messageSchema = new Schema({
    content: {
        type: String,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
}, {
    _id: false,
});


const userSchema = new Schema({
    fullname: {
        type: String,
        required: [true, 'Fullname is required'],
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    messages: [messageSchema],
},
{
    timestamps: true
}
);

export const User = mongoose.model("User", userSchema)