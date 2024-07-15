const seguimientoAstronauta = require('../ejercicio7');


describe('set de pruebas del ejercicio 7', () => {
    const Astronauta = seguimientoAstronauta();

    it('probando el método qué determina si un astronauta ha viajado a X planeta (prueba falsa)', () => {
        const astronauta = new Astronauta("Gustavo", 20, 2, ["Tierra", "Marte"]);
        expect(astronauta.hasTraveledTo("Saturno")).toBe("El astronauta de nombre Gustavo no ha viajado al planeta Saturno")
    });

    it('probando el método qué determina si un astronauta ha viajado a X planeta (prueba verdadera)', () => {
        const astronauta = new Astronauta("Gustavo", 20, 4, ["Tierra", "Júpiter", "Marte", "Urano"]);
        expect(astronauta.hasTraveledTo("Marte")).toBe("El astronauta de nombre Gustavo si ha viajado al planeta Marte")
    });

    it('probando el metodo que agrega nuevos planetas a la lista del astronauta (si debe agregar)', () => {
        const astronauta = new Astronauta("Sara", 25, 3, ["Tierra", "Mercurio", "Plutón"]);
        astronauta.addTravel(["Marte", "Saturno"]);
        expect(astronauta.planetas_visitados).toEqual(["Tierra", "Mercurio", "Plutón", "Marte", "Saturno"]);
    })

    it('probando el metodo que agrega nuevos planetas a la lista del astronauta (no debe agregar)', () => {
        const astronauta = new Astronauta("Sara", 17, 3, ["Tierra", "Mercurio", "Plutón"]);
        astronauta.addTravel(["Marte", "Saturno"]);
        expect(astronauta.planetas_visitados).toEqual(["Tierra", "Mercurio", "Plutón"]);
    })

    it('probando que al agregar nuevos planetas el numero de viajes si se actualice', () => {
        const astronauta = new Astronauta("Sara", 25, 3, ["Tierra", "Mercurio", "Plutón"]);
        astronauta.addTravel(["Marte", "Saturno"]);
        expect(astronauta.num_viajes).toBe(5);
    })

    


})