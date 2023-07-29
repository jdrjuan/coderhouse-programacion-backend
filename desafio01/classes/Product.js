class Product {

    constructor(title, description, price, thumbnail, code, stock) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }

    /**
     * Gets a new unique identifier every time this method is called.
     * @returns {number} New unique identifier.
     */
    static getNewId () {
        if (!this.nextId) {
            this.nextId = 0;
        }
        return ++this.nextId;
    }

}

export default Product;
