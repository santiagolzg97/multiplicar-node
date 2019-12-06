// requireds
const fs = require('fs');
let listarTabla = (base, limite = 10) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i} \n`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('La base no es un numero')
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            let resp = base * i;
            data += `${base} * ${i} = ${resp} \n`
        };
        fs.writeFile(`tablas/tabla del -${base} al ${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla del -${base} al ${limite}.txt`)
        });
    })
};

module.exports = {
    // crearArchivo: crearArchivo redundante
    crearArchivo,
    listarTabla,
}