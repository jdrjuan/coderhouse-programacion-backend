import express from 'express';
import ProductManager from './services/ProductManager.js';
import config from './config.js';

const PRODUCTS_FILE_PATH = config.PRODUCTS_FILE_PATH || './data/products.json';

const productManager = new ProductManager(PRODUCTS_FILE_PATH);

const app = express();

app.get('/products/', async (req, res) => {
    const products = await productManager.getProducts();
    res.send(products);
})

app.get('/products/:pid', async (req, res) => {
    const {pid} = req.params;

    const product = await productManager.getProductById(parseInt(pid));
    if (!product) {
        res.status(404).send({});
        return;
    }

    res.send(product);
})

const server = app.listen(config.PORT, () => { console.log(`Servidor escuchando en puerto ${config.PORT}`)});
server.on('error', error => console.log('Error al iniciar el servidor:', error.message));
