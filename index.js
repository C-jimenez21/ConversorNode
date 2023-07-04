import { convertirDolaresAEuros, convertirDolaresALibras } from "./conversor.js"
import readline from "node:readline";

//se usa esta interfaz para crear los prompts de JS 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  //Se realiza la peticion de las variables
  // let nombre = await rl.question("Ingrese el nombre? \n");
  // let edad = await rl.question("Ingrese el edad? \n");
  // console.log(nombre);
  // console.log(edad);
  
  rl.question("Ingrese el valor del DOLAR?\n", (valor)=>{
      readline.cursorTo(process.stdout,0,1);
      readline.clearScreenDown(process.stdout);
      console.log(`El valor ${valor} dolares son: ${convertirDolaresAEuros(valor)} EUROS`); 
      console.log(`El valor ${valor} dolares son: ${convertirDolaresALibras(valor)} LIBRAS`); 
      process.exit();    
  });
  