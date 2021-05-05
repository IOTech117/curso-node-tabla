
const {crearTablaDeMultiplicar} = require('./helpers/multiplicar')
const {argv} = require('./config/configurarYargs')
let colors = require('colors');

console.clear()


crearTablaDeMultiplicar(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(err => console.log(err))
