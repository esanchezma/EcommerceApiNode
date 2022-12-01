const { CartServices } = require("../services")


const addToCart = async (req, res, next) =>{
    try {
        //const product = req.body
        const {userId} = req.params
        const {productId, quantity} = req.body
        const product = {userId: Number(userId), productId, quantity}
        
        console.log("Aqui esta producto", product);

        const result = await CartServices.addProductToCart(product, res)
        //console.log("muestro productos agregados", result);

        res.json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Data error",
        })
    }
}

const getAllProductsInCart = async (req, res, next) => {
    try {
        const {userId} = req.params
        const result = await CartServices.getCart(userId)
        res.json(result)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Data error",
        })
    }
}

module.exports = {
    addToCart,
    getAllProductsInCart
}