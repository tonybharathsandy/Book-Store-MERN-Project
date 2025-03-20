const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    address : {
        city : {
            type : String,
            required : true
        },
        country : {
            type : String,
            required : true
        },
        state : {
            type : String,
            required : true
        },
        zipcode : {
            type : String,
            required : true
        }
    },
    phone : {
        type : Number,
        required : true
    },
    productsIds : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Book',
            required : true
        }
    ],
    totalPrices :{
        type : Number,
        required : true
    } 
}, {
    timestamps : true
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order