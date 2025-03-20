const express = require('express')
const  jwt  = require('jsonwebtoken')
const User = require('./user.model')

const router = express.Router()

router.post('/admin',async (req, res) => {
    const {username, password} = req.body

    const JWT_SECRET = process.env.JWT_SECRET_KEY

    try{
        const admin = await User.findOne({username})

        if(!admin){
            return res.status(404).send({message : "Admin Not found"})
        }
        if(admin.password !== password){
            return res.status(401).send({message : "Invalid password"})
        }
        if(admin.username !== username){
            return res.status(401).send({message : "Invalid Username"})
        }
        const token = jwt.sign({id : admin._id, username : admin.username, role : admin.role}, JWT_SECRET, {expiresIn : "1h"})

        return res.status(200).json({
            message : "Authentication Successfull",
            token : token,
            user : {
               username : admin.username,
               role : admin.role
            }
        })

    }catch(error){
        console.error("Failed to login as Admin", error)
        res.status(500).send({message : "Failed to Login as Admin ? "})
    }
})

module.exports = router