import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/ContextApi";

function Login() {

    const {signInUser, signInWithGoogle} = useAuth()

    const [message, setMessage] = useState("")

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    let navigate = useNavigate()


    function handleChange(e){
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    async function handleSubmit (e, data) {
        e.preventDefault();
        try{
            await signInUser(data.email, data.password)
            setMessage("")
            alert('Login Successfull!')
            navigate('/')
        }catch(error){
          setMessage("Please Provide Proper Credentails ? ")
          console.log(error)
        }
    }

    const handleGoogleSignIn = async () => {
      try{
        await signInWithGoogle()
        alert("Login Successfull!")
        navigate('/')
        setMessage("")
      }catch(error){
        console.log(error)
        setMessage("Please Provide Proper Credentails ? ")
      }
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

      {/* Form */}
      <form onSubmit={(e) => handleSubmit(e, formData)} className="mt-6">
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">Password</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        {
        <p className="text-red-400 ms-20">{message}</p>
        }
        {/* Login Button */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="w-full border-gray-300" />
        <span className="px-3 text-gray-500 text-sm">or</span>
        <hr className="w-full border-gray-300" />
      </div>
      <div>
        {message && <p className="text-red-500 text-sm text-center">{message}</p>}
      </div>

      {/* Google Sign In */}
      <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100 transition">
        <FaGoogle className="text-red-500 mr-2" />
        Sign in with Google
      </button>

      {/* Register Link */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Don't have an account? 
        <Link to={'/register'} className="text-blue-500 hover:underline ml-1">Register</Link>
      </p>
    </div>
  </div>
);
}

export default Login;
