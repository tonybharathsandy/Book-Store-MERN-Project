const Order = require("./order.model")

const createAOrder = async (req, res) => {
    try{
        const newOrder = await Order(req.body);
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    }catch(error){
        console.log("Error creating order", error)
        res.status(500).json({message : "Failed to create order"})
    }
};

const getOrderByEmail = async (req, res) => {
    try{
        const {email} = req.params;
        const orders = await Order.find({email}).sort({createdAt : -1})
        if(!orders){
            res.status(400).json({message : "Order not Found"})
        }
        res.status(200).json(orders);
    }catch(error){
        console.log("Error getting order", error)
        res.status(500).json({message : "Failed to getting order"})
    }
}

module.exports = {
    createAOrder,
    getOrderByEmail
}