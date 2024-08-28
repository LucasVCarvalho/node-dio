//quais ações meu carrinho pode fazer

//CASOS DE USO - ASSINATURAS
// ✅ -> adicionar item no carrinho 
async function addItem(userCart, item) {
    userCart.push(item);
}

// ✅ -> calcular o total  do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS: ");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎁 Total: ${result}`);
}

// ✅ -> deletar item no carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }

}

// ✅ -> remover um item - diminui um item
async function removeItem(userCart, item) {

    //encontrar indice do item
    const indexFound = userCart.findIndex((p) => p.name == item.name);

    //2. Caso não encontre o item
    if (indexFound == -1) {
        console.log("item não encontrado");
        return;
    }

    //3. item > 1 subtrair um item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    //4. item = 1 deletar o item
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
    }
    //Remove item by index
    // //transforma o indice visual do usuario, para o indice do backend
    // const deleteIndex = index - 1;
    // //é maior do que zero e se é menor do que o tamanho do carrinho
    // if (index >= 0 && index < userCart.length) {
    //     userCart.splice(deleteIndex, 1);
    // }
}
// ✅ mostra todos os items do carrinho 
async function displayCart(userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}.${item.name} - R$${item.price} | ${item.quantity
            }x | Subtotal = ${item.subtotal()}`
        );
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}