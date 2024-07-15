const getMultiplos = require('../ejercicio3');


describe('set de pruebas del ejercicio 3', () => {
    it('caso de prueba al momento de llamar la funcion con el numero 5', () => {
        expect(getMultiplos(5, 2)).toEqual([5, 10]);
    });
    it('caso de prueba al momento de llamar la funcion con el numero 3', () => {
        expect(getMultiplos(3, 10)).toEqual([3, 6, 9, 12, 15, 18, 21, 24, 27, 30]);
    });
    it('caso de prueba al momento de llamar la funcion con el numero 9', () => {
        expect(getMultiplos(9, 5)).toEqual([9, 18, 27, 36, 45])})
    it('caso de prueba al momento de llamar la funcion con el numero 0', () => {
        expect(getMultiplos(0, 10)).toBeFalsy(); 
    });

})