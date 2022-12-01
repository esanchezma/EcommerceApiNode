const db = require("../utils/database");
const initModels = require("../models/initModels");
const { forEach } = require("p-iteration");
const { User,Product,Order,ProductInCart,ProductInOrder,Cart  } = require("../models");

initModels();

const user = [
  {
    username: "Eliza",
    email: "sanchezelizabeth99@gmail.com",
    password: "1234",
  },
  {
    username: "Eylit",
    email: "eylit@gmail.com",
    password: "1234",
  },
  {
    username: "Joeslit",
    email: "joeslit@gmail.com",
    password: "1234",
  },
  {
    username: "Jose Luis",
    email: "josel@gmail.com",
    password: "1234",
  },
  {
    username: "Elias",
    email: "elias@gmail.com",
    password: "1234",
  }
];

const product = [
  {
    name: "MULCO Blue Marine MW3-70603-044",
    price: 1000,
    productImage: 'https://i.pinimg.com/736x/2d/bb/a5/2dbba57dc3b1080aba97fa7b5abf7a03--movement-watches-casual-watches.jpg',
    availableQty: 20,
    status: true,
    userId: 1
  },
  {
    name: "Fossil Gen 5 Julianna 44mm",
    price: 1350,
    productImage: 'https://i.ebayimg.com/images/g/2nIAAOSwdNRhAWlm/s-l500.jpg',
    availableQty: 24,
    status: true,
    userId: 2
  },
  {
    name: "Mulco Blue Marine Fusion MW-3-19495-113 – Laguna Bay",
    price: 900,
    productImage: 'https://lagunabaypanama.com/wp-content/uploads/MULCO23-600x600.jpg',
    availableQty: 21,
    status: true,
    userId: 3
  },
  {
    name: "Mulco MW1 Analog Display Swiss Quartz",
    price: 1200,
    productImage: 'https://m.media-amazon.com/images/I/81RwivX6dxL._AC_UL1500_.jpg',
    availableQty: 22,
    status: true,
    userId: 4
  },
  {
    name: "Mulco Blue Marine MetalL MW-5-5003",
    price: 300,
    productImage: 'https://exitocol.vtexassets.com/arquivos/ids/386865/Reloj-Mulco-para-Mujer---BLUE-MARINE-METAL-MW-5-5003-021.jpg',
    availableQty: 20,
    status: true,
    userId: 5
  },
  {
    name: "Mulco Cuarzo Suizo",
    price: 1800,
    productImage: 'https://m.media-amazon.com/images/I/71O0IfCid9L._AC_UL1500_.jpg',
    availableQty: 20,
    status: true,
    userId: 1
  },

];

const order = [
  {
    totalPrice: 0,
    userId:1,
    status: true,
  },
  {
    totalPrice: 0,
    userId:2,
    status: true,
  },
  {
    totalPrice: 0,
    userId:3,
    status: true,
  },
];

const cart =[
  {
    totalPrice: 0,
    userId:1,
    status: true,
  },
  {
    totalPrice: 0,
    userId:2,
    status: true,
  }, {
    totalPrice: 0,
    userId:3,
    status: true,
  },
  {
    totalPrice: 0,
    userId:4,
    status: true,
  },
  {
    totalPrice: 0,
    userId:5,
    status: true,
  },
  
];

const productInCart = [
  {
    cartId: 1,
    productId: 4,
    quantity: 1,
    price: 0,
    status: true
  },
  {
    cartId: 2,
    productId: 5,
    quantity: 1,
    price: 0,
    status: true
  }
];

const productInOrder = [
  {
    orderId:1,  
    productId:1,
    quantity: 1,
    price: 0,
    status:false
  },
  {
    orderId:2,
    productId:2,
    quantity: 1,
    price:0,
    status:false
  },
  {
    orderId:3,
    productId:3,
    quantity: 1,
    price: 0,
    status:false
  },
  
];

async function seeding(){
  await db.sync({force: true})

  await forEach(user, (user)=> User.create(user))
  await forEach(product, (product)=> Product.create(product))
  await forEach(cart, (cart)=> Cart.create(cart))
  await forEach(order, (order)=> Order.create(order))
  await forEach(productInCart, (pic) => ProductInCart.create(pic))
  await forEach(productInOrder, (pio)=> ProductInOrder.create(pio))
  
};
seeding();