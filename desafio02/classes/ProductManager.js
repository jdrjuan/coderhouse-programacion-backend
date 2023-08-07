import {promises as fs} from 'fs';
class ProductManager {

    constructor (productsFilePath) {
        this.path = productsFilePath;
    }

    async addProduct(product) {

        let productIsOkForAdding = true;

        if (!this.isProductComplete(product)) {
            console.error('The product is not complete.');
            productIsOkForAdding = false;
        }

        if (await this.getProductByCode(product.code)) {
            console.error('A product with the same code has been found.');
            productIsOkForAdding = false;
        }

        if (!productIsOkForAdding) {
            console.error('The product could not be added.');
            return;
        }

        const products = await this.#getProductsArray();
        products.push(product);

        await this.#writeProductsFile(products)

    }

    async getProducts() {
        const products = await this.#getProductsArray();
        return products;
    }

    async getProductById(id) {
        const products = await this.#getProductsArray();
        const product = products.find(product => product.id === id)
        if (!product) {
            console.error('Not found');
        }
        return product;
    }

    async getProductByCode(code) {
        const products = await this.#getProductsArray();
        const product = products.find(product => product.code === code)
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

    async #writeProductsFile(products) {
        const productsString = JSON.stringify(products, null, '\t');
        try {
            return await fs.writeFile(this.path, productsString);
        } catch (error) {
            console.error(`\x1b[31mError:\x1b[0m Could not write file to ${this.path}`);
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
