// importar las dos dependencias de swagger
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Api Ecommerce",
            version: "1.0.0",
            description: "API para un ecommerce Proyecto Final Node."
        }
    },
    apis: [
        "./src/routes/users.routes.js",
        "./src/models/user.models.js",
        "./src/routes/auth.routes.js",
        "./src/models/product.models.js",
        "./src/routes/product.routes.js",
        "./src/models/cart.models.js",
        "./src/routes/cart.routes.js",
        "./src/models/purchase.models.js",
        "./src/routes/purchase.routes.js",
    ]
};

const swaggerSpec = swaggerJSDoc(options);

// Configuro Documentancion

const swaggerDocs = (app, port)=>{
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    app.get("/api/v1/docs.json", (req, res)=>{

        res.setHeader("ContentType", "application/json");
        res.send(swaggerSpec)
    })

    const HOST = process.env.DB_HOST;

    console.log(`documentacion disponible en http://${HOST}:${port}/api/v1/docs`);
};

module.exports = swaggerDocs;