'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let pivot = array[Math.floor(array.length/2)];
  let letf = [];
  let rigth = [];
  let centro = []
  if(array.length <= 1) return array;
  for(let i = 0; i<array.length;i++){
    if(array[i] < pivot){
      letf.push(array[i])
    }else if(array[i] > pivot){
      rigth.push(array[i])
    }else centro.push(array[i])
  }
   return quickSort(letf).concat(centro).concat(quickSort(rigth));
  }

  function merge(letf,rigth){
    let result = [];
    let indexleft = 0;
    let indexrigth = 0;
    while(indexleft < letf.length && indexrigth < rigth.length){
      if(letf[indexleft]<rigth[indexrigth]){
        result.push(letf[indexleft])
        indexleft++;
      }else{
        result.push(rigth[indexrigth])
        indexrigth++;
      } 
    }
    return result.concat(letf.slice(indexleft),rigth.slice(indexrigth));
  }
    
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: 
  let mid = Math.floor(array.length/2);
  let letf = array.slice(0, mid);
  let rigth = array.slice(mid);
  if(array.length === 1) return array;
  return merge(mergeSort(letf),mergeSort(rigth));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
