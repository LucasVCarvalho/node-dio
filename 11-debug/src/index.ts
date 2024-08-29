import { getBaseEmail } from "./services/email";

async function main() {
  console.log(await getBaseEmail("licas"));
  console.log("finalizado")
  console.log("...")
}

main();


