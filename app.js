
const {crearArchivo} = require('./importes/multi');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();

const listar = argv.l;
const base = argv.base;
const limite = argv.m;
//recibir argumentos -- no recomendable este metodo
//  const [,,arg3='base=4'] = process.argv;
//  const [, base=5] = arg3.split('=');
console.log(argv);


//const base = 7;

crearArchivo(base, listar, limite)
     .then(nombreArchivo => console.log(colors.green(nombreArchivo, ' creado')))
     .catch(err => console.log(err));


