import Product from './classes/Product.js';
import ProductManager from './classes/ProductManager.js';

const ProdManager = new ProductManager();

ProdManager.addProduct(new Product(
    'GoPro Hero 11 Black', 'Cámara de acción 4K.', 400, 'gopro11black.jpg', 'GP001', 20
));

// Same code
ProdManager.addProduct(new Product(
    'GoPro Hero 11 Black mini', 'Cámara de acción mini.', 360, 'gopro11mini.jpg', 'GP001', 15
));

// description null
ProdManager.addProduct(new Product(
    'Nintendo Switch', undefined, 350, 'switch.jpg', 'NSW001', 50
));

ProdManager.addProduct(new Product(
    'Smartphone', 'Teléfono pantalla Full HD.', 800, 'smartphone.jpg', 'SPH002', 25
));

ProdManager.addProduct(new Product(
    'Laptop', 'Laptop ultradelgada Intel Core i7.', 1200, 'laptop.jpg', 'LT003', 15
));

ProdManager.addProduct(new Product(
    'Auriculares', 'Auriculares con cancelación.', 150, 'auriculares.jpg', 'AU004', 100
));

console.table(ProdManager.getProducts());


console.log('----- getProductById(1) -----');
console.log(ProdManager.getProductById(1));

console.log('----- getProductById(40) -----');
console.log(ProdManager.getProductById(40));

console.log('----- getProductByCode(\'GP001\') -----');
console.log(ProdManager.getProductByCode('GP001'));

console.log('----- getProductByCode(\'XXX\') -----');
console.log(ProdManager.getProductByCode('XXX'));


const nombre1 = 'Beck';
const nombre2 = 'Schneider';
const nombre3 = 'Reed';
const nombre4 = 'Gibson';
const nombre5 = 'Goodman';
const nombre6 = 'Davidson';
const nombre7 = 'Salazar';
const nombre8 = 'Simpson';
const nombre9 = 'Shelton';
const nombre10 = 'Taylor';