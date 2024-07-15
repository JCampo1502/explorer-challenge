const incentivo = require('../ejercicio1');


describe('incentivo', function(){
 it('if everything is alright, it should  return a falsy value', function(){
    expect(incentivo(100, 200)).toBeFalsy(); 
 });
 it('if everything is alright, it should  return a truthy value', function(){
    expect(incentivo(300, 200)).toBeTruthy()
 })
 it('if everything is alright, it should  return a null value', function(){
    expect(incentivo(-100, 200)).toBeFalsy(); 
 })
 it('if everything is alright, it should  return a null value', function(){
    expect(incentivo(0, 200)).toBeFalsy(); 
 })
})