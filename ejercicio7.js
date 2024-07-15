

function seguimientoAstronauta() {

    class Astronauta {

        constructor(nombre, edad, viajes, planetas_visitados) {
            this.nombre = nombre;                           // type String
            this.edad = edad;                               // type Number
            this.num_viajes = viajes;                       // type Number
            this.planetas_visitados = planetas_visitados;   // type Array
        }

        hasTraveledTo(planet) {
            /* Este método evalua si el astronauta viajó al planeta recibido en "planet"
               de ser así devuelve un mensaje que dirá 
               "El astronauta de nombre (nombre del astronauta) si ha viajado al planeta (planet)"
               de lo contrario devuelve un mensaje que dirá
               "El astronauta de nombre (nombre del astronauta) no ha viajado al planeta (planet)"
            */

                                /*  Tú código aquí abajo */
            const planetExist = this.planetas_visitados.some(
                p => p.toLowerCase() == planet.toLowerCase()
            )
            return planetExist 
                ?`El astronauta de nombre ${this.nombre} si ha viajado al planeta ${planet}`
                :`El astronauta de nombre ${this.nombre} no ha viajado al planeta ${planet}`
           
        }


        addTravel(new_planets) {
            /* Este metodo recibe un arreglo con los nuevos planetas que el astronauta ha visitado 
               Ej. ["Marte", "A-113"] y lo que debe hacer es agregarlo a las que ya se encuentran en
               planetas_visitados y actualizar el numero de viajes que éste ha realizado 
               (dato que se encuentra en num_viajes)
            */

            
            //  Nota: para que un astronauta pueda viajar, debe ser mayor de 18 años y menor de 50 años
           

                         /*  Tú código aquí abajo */
            if(this.edad>=18){
                this.planetas_visitados = [...this.planetas_visitados, ...new_planets];
                this.num_viajes = this.planetas_visitados.length;
            }
          
        }

    }

    return Astronauta;



}

module.exports = seguimientoAstronauta; 