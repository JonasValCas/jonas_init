const _ = require('lodash');  // Importamos lodash

let array = [1, 2, 3, 4, 5];
let sumaTotal = _.sum(array);  // Usamos _.sum() de lodash
console.log(`La suma total del array es: ${sumaTotal}`);