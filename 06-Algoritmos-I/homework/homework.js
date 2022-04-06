'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr = [1]
  var dividir = 2
  while( num > 1){
    if(num % dividir === 0){
      arr.push(dividir)
      num = num / dividir;
    }else{
      if(dividir % 2 === 0)dividir += 1
      else dividir += 2;
    }
  }
  return arr;
}          
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  while(swap){
    swap = false
  for(let i = 0; i < array.length - 1; i++){
    if(array[i] > array[i+1]){
      let value = array[i]
      array[i] = array[i+1]
      array[i+1] = value
      swap = true
    }
  }
}
  return array;
}        
function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
for(let i = 1; i < array.length; i++){
  let p = i-1;
  let value = array[i];
  while(p >= 0 && value < array[p]){
    array[p+1] = array[p];
    p--;
  }
  array[p+1] = value;
 } 
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i= 0; i<array.length;i++){
    let min = i;
    for(let j= i+1; j < array.length; j++){
      if(array[min] > array[j]){
        min = j
      }
    }
    if(min !== i){
      let select = array[i]
      array[i] = array[min]
      array[min] = select
    }
}
return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
