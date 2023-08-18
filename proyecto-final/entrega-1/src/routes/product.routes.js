import { Router } from "express";
import ProductManager from '../services/ProductManager.js';
import config from '../config.js';

const productRouter = Router();

const PRODUCTS_FILE_PATH = config.PRODUCTS_FILE_PATH || './src/data/products.json';
const productManager = new ProductManager(PRODUCTS_FILE_PATH);


productRouter.get('/', async (req, res) => {
    const products = await productManager.getProducts();
    const {limit} = req.query;

    // If limit string contains an integer value
    if(/^\d+$/.test(limit)) {
        const productsLimit = +limit;
        const productsRange = products.slice(0, productsLimit);
        return res.send(productsRange);
    }
    
    res.send(products);
})

productRouter.get('/:pid', async (req, res) => {
    const {pid} = req.params;

    const product = await productManager.getProductById(parseInt(pid));
    if (!product) {
        res.status(404).send({});
        return;
    }

    res.send(product);
})


export default productRouter;
