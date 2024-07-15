const operarNumeros = require('../ejercicio5'); 

describe('set de pruebas del ejercicio 5', () => {
    it('prueba del tipo de dato retornado', () => {
        expect( typeof operarNumeros('5', '8')[1]).toBe('number'); 
    });
    it('prueba del del valor retornado en la suma', () => {
        expect(operarNumeros('5', '8')[0]).toEqual(13); 
    });
    it('prueba  del valor retornado en la resta', () => {
        expect(operarNumeros('5', '8')[1]).toEqual(-3); 
    }); 
    it('prueba del valor retornado en la suma', () => {
        expect(operarNumeros('20', '30')[0]).toEqual(50); 
    });
    it('prueba del valor retornado en la resta', () => {
        expect(operarNumeros('20', '10')[1]).toEqual(10); 
    });
})