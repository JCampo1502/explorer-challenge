const paises = require('../ejercicio2');


describe('Prueba del ejercicio de paises', function () {
    const countries = ['Colombia', 'Venezuela', 'Perú', 'Costa Rica']; 
    it('if everything id alright, the function it should return an array without an element', () => {
        expect(paises(countries, 'Perú')).toEqual(['Colombia', 'Venezuela', 'Costa Rica']);
    });
    it('if everything id alright, the function it should return an array with new countries', () => { 
        expect(paises(countries, 'México')[countries.length-1]).toBe('México');
    });
})