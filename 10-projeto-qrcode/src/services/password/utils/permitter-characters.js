//extract method
async function permittedCharacters() {
    let permitted = [];

    if (process.env.UPPERCASE_LETTERS === "true")
        permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    //... é um spread operator para não substituir o que já está dentro
    if (process.env.LOWERCASE_LETTERS === "true")
        permitted.push(..."abcdefghijklmnopqrstuvwxyz");

    if (process.env.NUMBERS === "true")
        permitted.push(..."0123456789");

    if (process.env.SPECIAL_CHARACTERS === "true")
        permitted.push(..."!@#$%^&*()-_");

    return permitted;
}

export default permittedCharacters;