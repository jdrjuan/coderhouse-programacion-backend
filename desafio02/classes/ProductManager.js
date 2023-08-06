import {promises as fs} from 'fs';
class ProductManager {

    constructor (productsFilePath) {
        this.path = productsFilePath;
    }

    addProduct(product) {

        let productIsOkForAdding = true;

        if (!this.isProductComplete(product)) {
            console.error('The product is not complete.');
            productIsOkForAdding = false;
        }

        if (this.getProductByCode(product.code)) {
            console.error('A product with the same code has been found.');
            productIsOkForAdding = false;
        }

        if (!productIsOkForAdding) {
            console.error('The product could not be added.');
            return;
        }

        this.products.push(product);

    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id)
        if (!product) {
            console.error('Not found');
        }
        return product;
    }

    getProductByCode(code) {
        const product = this.products.find(product => product.code === code)
        return product;
    }

    isProductComplete(product) {
        for (const prop in product) {
            if (!product[prop]) {
                return false;
            }
        }
        return true;
    }

    async #readProductsFile() {
        try {
            return await fs.readFile(this.path, 'utf8');
        } catch (error) {
            console.error(`\x1b[31mError:\x1b[0m Could not read file from ${this.path}`);
            throw error;
        }
    }

    async #getProductsArray() {
        let productsArray = [];
        try {
            const parsedJSON = JSON.parse(await this.#readProductsFile());
            if (!Array.isArray(parsedJSON)) {
                throw new Error();
            }
            productsArray = parsedJSON;
        } catch (error) {
            console.error(`\x1b[31mError:\x1b[0m Could not parse array from ${this.path}`);
            console.log('Creating empty array');
        }
        return productsArray;
    }

}

export default ProductManager;
