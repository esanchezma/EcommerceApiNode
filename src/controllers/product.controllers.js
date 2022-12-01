const { ProductServices } = require('../services');

const getStock = async (req, res, next) => {
  try {
    const stock = await ProductServices.getStock();
    res.json({stock})
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Error Data",
    });
  }
};

const createProduct = async (req, res, next) =>{
    try {
        const data = req.body;
        console.log(data)
        const newProduct = await ProductServices.createProduct(data)
        res.status(201).json(newProduct)
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Error Data",
          });
    }
}

module.exports = {
    getStock,
    createProduct
}
