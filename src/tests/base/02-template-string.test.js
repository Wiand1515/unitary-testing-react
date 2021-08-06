import '@testing-library/jest-dom';
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('Prueba en metodo getSaludo', () => {
        
        const nombre = 'Filip';

        const saludo = getSaludo( nombre );

        expect(saludo).toBe('Hola ' + nombre)
    });

    test('getSaludo, debe retornar el nombre por defecto', () => {
        
        const saludo = getSaludo(  );

        expect(saludo).toBe('Hola Matias')

    });
    
    
})