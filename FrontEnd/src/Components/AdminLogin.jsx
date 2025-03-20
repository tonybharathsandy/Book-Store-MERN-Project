import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import getBaseUrl from '../Utilities/baseUrl';

function AdminLogin() {
        const [message, setMessage] = useState("")

        let Navigate = useNavigate()
      const [formData, setFormData] = useState({
            username: '',
            password: ''
        });

    function handleChange(e){
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    async function handleSubmit (e, data) {
        e.preventDefault();
        try{    
            const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
                headers : {
                    'Content-Type' : 'application/json',
                }
            })
            const auth = response.data
            console.log(auth)
            if(auth.token){
                localStorage.setItem("token", auth.token );
                setTimeout(() => {
                    localStorage.removeItem('token')
                    alert("Token has been expired!, Please login again.")
                    Navigate('/')
                }, 3600 * 1000)
            }
          

            setMessage("")
            alert('Login Successfull!')
            Navigate('/dashboard')
        }catch(error){
          setMessage("Please Provide Proper Credentails ? ")
          console.log(error)
        }
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800">Admin DashBoard Login</h2>

      {/* Form */}
      <form onSubmit={(e) => handleSubmit(e, formData)} className="mt-6">
        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium">Username</label>
          <input 
            type="text" 
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your Username"
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

      <div>
        {message && <p className="text-red-500 text-sm text-center">{message}</p>}
      </div>
           
    </div>
  </div>
);
}

export default AdminLogin