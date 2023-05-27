import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en archivo 02-template-string', () => {

    test('getSaludo debe retornar "Hola Illika"', () => {
        
        const name = 'Illika';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${name}`);

    })
})