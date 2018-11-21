// argv.argv es igual para la utlizacion de objeto es decir se podria colocar objeto.argv
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0];
switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log(argv.base);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}.txt`))
            .catch(e => console.error(e));;
        break;
    default:
        console.log('Comando no reconocido')
}