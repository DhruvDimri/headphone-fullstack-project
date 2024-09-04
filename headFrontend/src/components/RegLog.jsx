import React from 'react'
import "./reglog.css"
import { Link } from 'react-router-dom'

const RegLog = () => {
  return (
   <div className="reglog">
        <p>Please register OR login yourself first as appropriate</p>
        <div className="reglog-group">
        <Link to="/registration">Register</Link>
        <Link to="/login">Login</Link>
        </div>
        
   </div>
  )
}

export default RegLog