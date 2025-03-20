import React from 'react'
import { Navigate } from 'react-router-dom'

function AdminRoute({children}) {

    const token = localStorage.getItem('token')
    if(!token){
        return <Navigate to = '/admin/login'/>
    }
    return children ? children : <div>No Page</div>
 
}

export default AdminRoute