



function getProperty(object, property){
   /* 
      -- La función recibe dos argumentos.
      -- El argumnento llamado "object", recibe un objeto.
      -- El argumento llamado "property", recibe el nombre de una
         propiedad en forma de string Ej. "name"
   */

   /*   
       Al final, la función debe devolver el valor que posee la propiedad 
       especificada dentro del objeto
   */

   /*
                                    -- EJEMPLO --
        *getProperty({
         name: "Pedro",
         age: 30
        }, "name") la función debe devolver "Pedro". 
        
        *getProperty({
         pets: ['Gato', 'Perro', 'Conejo'],
         owner: "Pedro Picapiedra"
        }, "pets") la función debe devolver ['Gato', 'Perro', 'Conejo']. 
        
   */

                              /*  Tú código aquí abajo */

    
   return object[property]
}

module.exports = getProperty; 