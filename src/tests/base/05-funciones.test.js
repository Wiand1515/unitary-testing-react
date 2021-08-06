import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones';

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un Objeto ', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect( user ).toStrictEqual(userTest)
        
    })
    
    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombre = 'perro';
        const user = getUsuarioActivo(nombre);
        
        const userActivo = {
            uid: 'ABC567',
            username: nombre
        }

        expect(user).toStrictEqual(userActivo);
    })
    

})