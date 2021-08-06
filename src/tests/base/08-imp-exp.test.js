import '@testing-library/jest-dom'
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones que retornan heroes', () => {
    
    test('Debe retornar Heroes por id', () => {
        
        const id = 4;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroe).toEqual(heroeData);

    })

    test('Debe retornar undefined si id no valido', () => {
        
        const id = 15;
        
        const heroe = getHeroeById( id );

        expect(heroe).toBe(undefined);

    })

    test('Debe retornar un arreglo con heroes de DC ', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        const heroOwner = heroes.filter( (heroe) => heroe.owner === owner);
        console.log(heroOwner);

        expect(heroe).toEqual(heroOwner)
    })

    test('Debe retornar un arreglo con heroes de Marvel, y un largo de 2 ', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        const heroOwner = heroes.filter((heroe) => heroe.owner === owner);

        expect(heroe).toEqual(heroOwner);
        expect(heroOwner.length).toBe(2);

    })
    
    


    
})
