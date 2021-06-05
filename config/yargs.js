const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type: 'number',
                    demandOption: true,
                    description: 'La base ocupada para la tabla de multiplicar'
                })
                .check((argv, options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un numero';
                    }
                    return true;
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    description: 'muestra la tabla en sistema'
                })
                .argv;

module.exports = argv;