import Product from './classes/Product.js';
import ProductManager from './classes/ProductManager.js';
import config from './config.js';

const PRODUCTS_FILE_PATH = config.PRODUCTS_FILE_PATH || './data/products.json';

const productManager = new ProductManager(PRODUCTS_FILE_PATH);

console.table(await productManager.getProducts());

await productManager.addProduct(new Product(
    'GoPro Hero 11 Black', 'Cámara de acción 4K.', 400, 'gopro11black.jpg', 'GP001', 20
));

await productManager.addProduct(new Product(
    'Galaxy S20FE', 'Excelentes prestaciones. Excelente precio.', 800, 'smartphone.jpg', 'SPH002', 25
));

await productManager.addProduct(new Product(
    'Laptop R700', 'Laptop ultradelgada Intel Core i7.', 1200, 'laptop.jpg', 'LT003', 15
));

// Same code
await productManager.addProduct(new Product(
    'GoPro Hero 11 Black mini', 'Cámara de acción mini.', 360, 'gopro11mini.jpg', 'GP001', 15
));

// description null
await productManager.addProduct(new Product(
    'Nintendo Switch', undefined, 350, 'switch.jpg', 'NSW001', 50
));

await productManager.addProduct(new Product(
    'Auriculares', 'Auriculares con cancelación.', 150, 'auriculares.jpg', 'AU004', 100
));


await productManager.updateProduct(4, new Product(
    'New Title', 'New description', 599, 'new-thumbnail.jpg', 'NEW', 33
));

console.log(await productManager.getProductById(10));
console.log(await productManager.getProductById(8888));

console.log(await productManager.getProductByCode('GP001'));
console.log(await productManager.getProductByCode('XXX'));

await productManager.deleteProduct(4);

console.table(await productManager.getProducts());
