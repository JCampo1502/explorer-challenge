const getStudents = require('../ejercicio6');

const students = [
    {
        name: 'Gustavo',
        lastName: 'Montenegro'
    }, 
    {
        name: 'Leisy', 
        lastName: 'Casablanca'
    }, 
    {
        name: 'Sara', 
        lastName: 'Real'
    } 
]


describe('set de pruebas para el ejercicio 6', () => {
    it('La funcion debe retornar un objeto de la estudiante con nombre Sara', () => {
        expect(getStudents(students, 'Sara')).toEqual(students[2])
    });
    it('La funcion debe retornar un objeto del estudiante con nombre Gustavo', () => {
        expect(getStudents(students, 'Gustavo')).toEqual(students[0]); 
    });
    it('La funcion debe retornar un objeto de la estudiante con nombre Leisy', () => {
        expect(getStudents(students, 'Leisy')).toEqual(students[1])
    });
})