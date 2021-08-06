


const nombre   = 'Matias';
const apellido = 'Fuentes';


// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;




export function getSaludo(nombre = 'Matias') {
    return 'Hola ' + nombre;
}

