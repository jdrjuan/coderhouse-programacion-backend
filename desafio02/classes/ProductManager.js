import {promises as fs} from 'fs';
class ProductManager {

    constructor (productsFilePath) {
        this.path = productsFilePath;
        this.products = null;
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
        product.id = this.getNextId(products);
        products.push(product);

        try {
            await this.#writeProductsFile(products)
        } catch (error) {
            console.error(`The product could not be added.`);
        }

    }

    getNextId (products) {
        let nextId = products.reduce((maxId, product) => {
            return product.id > maxId ? product.id : maxId;
        }, 0);
        return nextId + 1;
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
            console.error(`\x1b[31mError:\x1b[0m Could not read from file ${this.path}`);
            throw error;
        }
    }

    async #writeProductsFile(products) {
        const productsString = JSON.stringify(products, null, '\t');
        try {
            return await fs.writeFile(this.path, productsString);
        } catch (error) {
            console.error(`\x1b[31mError:\x1b[0m Could not write to file ${this.path}`);
            throw error;
        }
    }

    async #getProductsArray() {
        if (this.products !== null) {
            return this.products;
        }
        this.products = [];
        try {
            const parsedJSON = JSON.parse(await this.#readProductsFile());
            if (!Array.isArray(parsedJSON)) {
                throw new Error();
            }
            this.products = parsedJSON;
        } catch (error) {
            console.error(`\x1b[31mError:\x1b[0m Could not parse array from ${this.path}`);
        }
        return this.products;
    }

}

export default ProductManager;
