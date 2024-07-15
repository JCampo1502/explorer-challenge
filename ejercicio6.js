






function getStudent(studenst, name){
    /* 
      -- La función recibe dos argumentos.
      -- El argumento "students" recibe un arreglo con objetos dentro,
         NOTA: todos los objetos contienen la propiedad "name" en ellos.
      -- El argumento "name", recibe el nombre de un estudiante en forma 
         de string. 
    */

    /*
       Al final, la funcion debe devolver el objeto con los datos del estudiante
       que coincida con el nombre recibido en el argumento "name"
    */

     /*
                                    -- EJEMPLO --
        *getStudent([
            {
                name: "Pedro", 
                age: 24
            },
            {
                name: "María",
                age: 19
            }, 
            {
                name: "Ángel", 
                age: 21
            }
        ], "María") la funcion debe devolver { name: "María", age: 19 }
    */
   
                           /*  Tú código aquí abajo */

    return studenst.filter(student => student.name.toLowerCase() == name.toLowerCase()).pop();

}

module.exports = getStudent; 