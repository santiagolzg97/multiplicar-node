const { argv } = require('./config/yargs')
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const colors = require('colors');
//recuerda que {} despues de un let o const significa unas destructuracion.
//let base = 'abc';

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(colors.yellow(`Archivo creado: ${archivo}`)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');

}
//console.log(argv);
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//console.log(argv.base);
//console.log('limite: ', argv.limite);