import Product from './classes/Product.js';
import ProductManager from './classes/ProductManager.js';
import config from './config.js';

const PRODUCTS_FILE_PATH = config.PRODUCTS_FILE_PATH || './data/products.json';

const productManager = new ProductManager(PRODUCTS_FILE_PATH);

productManager.addProduct(new Product(
    'GoPro Hero 11 Black', 'Cámara de acción 4K.', 400, 'gopro11black.jpg', 'GP001', 20
));

// Same code
productManager.addProduct(new Product(
    'GoPro Hero 11 Black mini', 'Cámara de acción mini.', 360, 'gopro11mini.jpg', 'GP001', 15
));

// description null
productManager.addProduct(new Product(
    'Nintendo Switch', undefined, 350, 'switch.jpg', 'NSW001', 50
));

productManager.addProduct(new Product(
    'Smartphone', 'Teléfono pantalla Full HD.', 800, 'smartphone.jpg', 'SPH002', 25
));

productManager.addProduct(new Product(
    'Laptop', 'Laptop ultradelgada Intel Core i7.', 1200, 'laptop.jpg', 'LT003', 15
));

productManager.addProduct(new Product(
    'Auriculares', 'Auriculares con cancelación.', 150, 'auriculares.jpg', 'AU004', 100
));

console.table(productManager.getProducts());


console.log('----- getProductById(1) -----');
console.log(productManager.getProductById(1));

console.log('----- getProductById(40) -----');
console.log(productManager.getProductById(40));

console.log('----- getProductByCode(\'GP001\') -----');
console.log(productManager.getProductByCode('GP001'));

console.log('----- getProductByCode(\'XXX\') -----');
console.log(productManager.getProductByCode('XXX'));

