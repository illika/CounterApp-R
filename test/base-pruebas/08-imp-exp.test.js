import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Prueba en 08-imp-exp', () => {

    test('getHeroeById debe retornar Heroe por Id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroeById debe retornar undefined si no existe', () => {

        const id = 100;
        const heroe = getHeroeById(id);
        //console.log(heroe);
        // nulo undefined o false
        expect(heroe).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC', () => {

        const owner = "DC";
        const heroe = getHeroesByOwner(owner);

        expect(heroe.length).toBe(3);
        expect(heroe).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);

        expect(heroe).toEqual(heroes.filter((h) => h.owner === owner));
    });

    test('getHeroesByOwner debe retornar un arreglo con los heroes de MARVEL', () => {

        const owner = "Marvel";
        const heroe = getHeroesByOwner(owner);

        expect(heroe.length).toBe(2);
        expect(heroe).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
    });

})