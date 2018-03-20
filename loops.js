var myArray =[];
function forLoop(array) {

    for (var i = 0; i < 25; i++) {
      if ( i === 0){
        array.push("I am 1 strange loop.");
      } else {
        array.push('I am '+ i + ' strange loop.');
      }
    }

  return array;
}
let countdown = 100;
function whileLoop(counter){
  while (counter > 0) {
    console.log(--counter);
  }
  return 'done';
}
