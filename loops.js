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
var myArray1 = ['dog','cat','mouse'];
function maybeTrue(array) {
  var number = Math.random() >= 0.5;
  array.pop();
  return array;
}
do {
  console.log('doo-bee-doo-bee-doo')
} while (myArray1.length > 0 && maybeTrue(myArray1));
