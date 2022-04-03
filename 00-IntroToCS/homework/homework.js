'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
   let acc= 0;
   for( let i = 0; i < num.length; i++ ){
     acc += num[i] * 2**(num.length -1 -i);
   }
      return acc;
  }


function DecimalABinario(num) {
  // tu codigo aca
let binario ="";
while (num){
  binario=num%2 + binario
  num = Math.floor(num/2);
}
return binario;
}




module.exports = {
  BinarioADecimal,
  DecimalABinario,
}