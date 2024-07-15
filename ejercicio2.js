/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function manipularPaises(paises, pais) {
    /*  
      --  La funcion recibe dos argumentos.
      -- El argumento "paises" recibe un vector de strings
         que contiene el nombre de diversos paises ---Ejm. ["Colombia", "China", "Argentina"].
      -- El el argumento "país" recibe el nombre de un país en forma de String ---Ejm. "Panamá".
    */

    /*
      Si el pais recibido en el segundo argumento, ya está dentro del vector, este debe 
      ser eliminado del mismo, de lo contrario se debe agregar al final de éste.
      Al final la funcion debe devolver el vector con sus respectivas modificaciones
    */ 

    /*
                                     -- EJEMPLO --
        *manipularPaises(["Colombia", "China", "Argentina"], "Argentina")
         debe devolver ["Colombia", "China"].
        *manipularPaises(["Colombia", "China", "Argentina"], "Perú")
         debe devolver ["Colombia", "China", "Argentina", "Perú"]
    */

                              /*  Tú código aquí abajo */        
    if(paises.indexOf(pais)!=-1)
      return paises.filter(p => p!=pais)
    console.log([...paises, pais])
    return [...paises, pais]
  
}

module.exports = manipularPaises; 