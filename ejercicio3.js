/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function getMultiplos(num, limit) {

    /* 
         -- La función recibe dos argumentos. 
         -- El argumento "num" recibe un número que nos indica
            la base a la cual le hallaremos los respectivos multiplos. 
         -- El argumento "limit" recibe un número que nos indica cuántos
            multiplos vamos a encontrar
         
    */

    /*  Al final, la función debe devolver un vector con los múltiplos 
        encontrados dentro de él, siempre y cuando el valor recibido en "num"
        sea diferente de cero, de ser así se debe devolver un null 
    */

    /*
                                    -- EJEMPLO --
        *getMultiplos(5, 2) la función debe devolver [5, 10].
        *getMultiplos(3, 10) la función debe devolver [3, 6, 9, 12, 15, 18, 21, 24, 27, 30].
        *getMultiplos(0, 20) la función debe devolver null.
    */
   
                                   /*  Tú código aquí abajo */
    if(num==0)return null;
    return Array.from({length:limit},(_,i)=>num*(i+1))


}

module.exports = getMultiplos; 