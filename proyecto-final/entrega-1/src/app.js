import express from 'express';
import config from './config.js';
import productRouter from './routes/product.routes.js';

const app = express();

app.use('/products', productRouter);

const server = app.listen(config.PORT, () => { console.log(`Servidor escuchando en puerto ${config.PORT}`)});
server.on('error', error => console.log('Error al iniciar el servidor:', error.message));
