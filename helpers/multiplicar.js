
const fs = require('fs')
let colors = require('colors');

const crearTablaDeMultiplicar = async(base=5, listar, hasta) => {
    try{

            let salida = '';
            let consola = ''
            for (let i = 1; i < hasta +1; i++)
            {
                consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`)
                salida += (`${base} ${'x'} ${i} ${'='} ${base * i}\n`)
            }
            if(listar) {
                console.log('========================================='.green)
                console.log(`Tabla del ${colors.blue(base)}`)
                console.log('========================================='.green)
                console.log(consola)
            }
            fs.writeFileSync(`./salida/tablita-${base}.txt`, salida)
            return `tablita-${base}.txt creada`

    }catch (e){
        throw e
    }}

module.exports = {
     crearTablaDeMultiplicar
}