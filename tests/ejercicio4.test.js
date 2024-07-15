const getProperty = require('../ejercicio4'); 

const object = {
    name: 'María Gabriela',
    lastName: 'Bolívar', 
    age: 20,
    addres: "Avenida Calle 26 No 59-51 Edificio. Argos - Torre 3 Piso 4",
    pest: ['Magie', 'Kiara']
}


describe('Set de pruebas del ejercicio 4', () => {
    it('retornar el valor de la propiedad name', () => {
        expect(getProperty(object, 'name')).toBe('María Gabriela'); 
    })
    it('retornar uel valor de la propiedad pest en la posicion 0', () => {
        expect(getProperty(object, 'pest')[0]).toBe('Magie'); 
    })
    it('retornar null', () => {
        expect(getProperty(object, 'countrie')).toBeFalsy(); 
    })
})