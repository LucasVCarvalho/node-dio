//import * as database from "./utils/database.js"; import all
//import connectToDatabase from "./utils/database.js"; import default apenas 1 função/variavel
import { connectToDatabase, disconnectDatabase, databaseType } from "./utils/database.js"; //import destructuring
import { getDataFromApi } from "./utils/api.js";

connectToDatabase("my-database");
console.log(`Importando uma constante ${databaseType.userType} ${databaseType.typeData}`)
disconnectDatabase();
getDataFromApi();

//arquivo .cjs é um arquivo com configuração commonjs
//arquivo .mjs é um arquivo com configuração Ecmascript
//arquivo .js é um arquivo javascript que roda baseado no type(feature flag) definido no package.json