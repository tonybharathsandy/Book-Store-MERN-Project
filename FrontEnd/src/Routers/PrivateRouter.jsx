import React from 'react'
import { useAuth } from '../context/ContextApi'
import { Navigate } from 'react-router-dom'

function PrivateRouter({children}) {

    const {currentUser, loading} = useAuth()
    console.log(currentUser)
    console.log(loading)

    if(loading){
        return (<div>Loading...</div>)
    }
    if(currentUser){
        return children
    }
    return <Navigate to = '/login' replace/>
}

export default PrivateRouter