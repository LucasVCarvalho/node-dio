//const product = require("./services/products"):
const { getFullName, getProductLabel } = require("./services/products"); //destructuring

const config = require("./services/config")
const database = require("./services/database")

async function main() {
    console.log("carrinho compras:");
    getFullName("408", "mousepad");
    getProductLabel("mousepad");
    /*product.getFullName("408", "mousepad");
    product.getFullName("508", "mouse");
    product.getProductLabel("mousepad"); */

    console.log(config.client);
    database.connectToDatabase("SQL");
}

main();