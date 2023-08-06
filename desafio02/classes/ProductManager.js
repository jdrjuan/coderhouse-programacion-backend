class ProductManager {

    constructor (productsFilePath) {
        this.path = productsFilePath;
        this.products = [];
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

}

export default ProductManager;
