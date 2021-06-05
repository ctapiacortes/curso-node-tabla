const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 4, listar, limite) => {
    let salida = ''
    try{
        
            for (let i = 1; i <= limite; i++) {
                salida += `${base} x ${i} = ${base * i}\n`
            }

            if(listar){
                console.log('========================='.green);
                console.log(`Tabla del ${base}`);
                console.log('========================='.green);
                console.log(colors.rainbow(salida));
            }
        

        fs.writeFileSync(`./salida/ResultadoTabla${base}.txt`, salida);
        
        return `Tabla${base}.txt`;
    }catch(err){
        throw err;
    }

    
}

module.exports ={
    crearArchivo
}