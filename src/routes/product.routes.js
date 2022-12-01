const {Router} = require ('express');
const authenticate = require ('../middlewares/auth.middleware');
const { getStock, create, createProduct } = require('../controllers');

const router = Router ();

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Get all products from the store
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 * /api/v1/products/create:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       description: Create a new product for the store
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Mulco Blue Marine 
 *               price:
 *                 type: integer
 *                 example: 1000
 *               productImage:
 *                 type: string
 *                 example: https://i.pinimg.com/736x/2d/bb/a5/2dbba57dc3b1080aba97fa7b5abf7a03--movement-watches-casual-watches.jpg
 *               availableQty:
 *                 type: integer
 *                 example: 150
 *               status:
 *                 type: boolean
 *                 example: true
 *               userId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items: {}
 */

router.post('/products/create',authenticate, createProduct);
router.get('/products',authenticate, getStock);


module.exports = router;