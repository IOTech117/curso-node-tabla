const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar',
        type: 'number'
    })
    .option('l',{
        alias: 'listar',
        default: false,
        describe: 'imprime la tabla en consola si es true',
        type:'boolean'
    }).option('h',{
        alias: 'hasta',
        default: 10,
        describe: 'define hasta que numero multiplicar',
        type:'number'
    }).check((argv,options) =>{
        if(isNaN(argv.b)){
            throw ('La base tiene que ser numero')
        }

        if( isNaN(argv.h)){
            throw('hasta debe ser numero')
        }
        console.log(('yargs', argv))
        return true
    })
    .argv

module.exports = {
    argv
}