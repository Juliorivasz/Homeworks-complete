'use strict'

const { size } = require("@11ty/eleventy/src/TemplateCache");

// Las funciones nFactoria y nFibonacci deben resolverlas
// usando recursión. Una vez realizadas de esa forma pueden probar hacerlas
// de forma iterativa pero esto último no es obligatorio.

function nFactorial(n) {
  // devolvé el factorial de n (n!)
  // ej:
  // el factorial de 3 es 6 (3 * 2 * 1)

  if(n=== 0 || n === 1){ // si el valor de N es igual a 0 o es igual a 1 
    return 1;            // me devuelve 1;
  }

  if(n<0)return "error, el numero negativo no tiene factorial"; // si N es un numero negativo me devuelve error

  return n * nFactorial(n-1); // devuelve el valor N multiplicado por la funcion de N - 1
}

function nFibonacci(n) {
  // Secuencia de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,…
  // Retorna el enésimo numero de la serie
  // nFibonacci(0) // 0  // el elemento 0 es cero
  // nFibonacci(1) // 1 // el elemento 1 es 1
  // nFibonacci(6) // 1 // el elemento 6 es 8
  if(n <= 1)return n; // si N es menor que uno devuelve N

  return nFibonacci(n - 1) + nFibonacci(n - 2); 

}

// Para esta parte no es necesario utilizar recursión.
// Implementa la clase Queue que debe contener los siguientes métodos:
// enqueue: Agrega un valor a la queue. Respeta el orden existente.
// dequeue: Remueve un valor de la queue. Obedece a FIFO y respeta el underflow (devuelve undefined cuando la queue tiene size cero, o sea, cuando no tiene ningún elemento).
// size: Devuelve el número de elementos que contiene la queue.

function Queue() {   
  this.queue = [];
}
  Queue.prototype.enqueue = function(valor) { 
    this.queue.push(valor);
  }
  
  Queue.prototype.dequeue = function() {
    if (this.queue.length === 0) {
      return undefined;
    } else {
      return this.queue.shift();
    }
  }
  
  Queue.prototype.size = function() {
    return this.queue.length;
  }


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
