import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart");
//criando os itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);
//add itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
//diminuir quantidade de itens
await cartService.removeItem(myCart, item2);
//deletar itens no carrinho
// await cartService.deleteItem(myCart, item2.name);
await cartService.deleteItem(myCart, item1.name);

//ver itens do carrinho
await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);

