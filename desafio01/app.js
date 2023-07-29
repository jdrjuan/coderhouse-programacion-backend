import Product from './classes/Product.js';

const products = [];

products.push(new Product(
    'Nintendo Switch', 'Consola de videojuegos híbrida.', 350, 'switch.jpg', 'NSW001', 50
));

products.push(new Product(
    'GoPro Hero 11 Black', 'Cámara de acción 4K.', 400, 'gopro11black.jpg', 'GP001', 20
));

products.push(new Product(
    'Smartphone', 'Teléfono pantalla Full HD.', 800, 'smartphone.jpg', 'SPH002', 25
));

products.push(new Product(
    'Laptop', 'Laptop ultradelgada Intel Core i7.', 1200, 'laptop.jpg', 'LT003', 15
));

products.push(new Product(
    'Auriculares', 'Auriculares con cancelación.', 150, 'auriculares.jpg', 'AU004', 100
));

console.log(products);
