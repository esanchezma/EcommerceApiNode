const { PurchaseServices, UserServices } = require("../services");
const transporter = require("../utils/mailer");

const purchase = async (req, res, next) =>{
    try {
        const {userId} = req.params
        //const {status} = req.body

        const data = Number(userId)

        const user = await UserServices.getOne(userId)
        const result = await PurchaseServices.createOrder(data)
        console.log("User is", user);

        res.status(201).json(result)

        await transporter.sendMail({
            from: "<sanchezelizabeth99@gmail.com>",
            to: user.email,
            subject: "Thanks for your purchase",
            text: `Hi ${user.username} enjoy our Product`,
            html: `<p>Hi<h1>${user.username} </h1>enjoy our Product</p>`
          });
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "purchase denied"
        })
    }
}

const getAll = async (req, res, next) => {
    try {
        const {userId} = req.params

        const data = Number(userId)
        console.log("este el la data", data);
        const result = await PurchaseServices.seeOrders(data)
        res.json(result)

    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "error"
        })
    }
}

module.exports = {
    purchase,
    getAll
}