const databaseType = {
    userType: "admin",
    typeData: "datelocal",
}

async function connectToDatabase(dataName) {
    //lógica de conexão
    console.log(`conectado ao banco ${dataName}`);
}

async function disconnectDatabase() {
    console.log("desconectando do banco de dados");
}
//export default esm6/ export através de objeto
export { connectToDatabase, disconnectDatabase, databaseType };