
function forLoop(array) {
var array = [];

    for (var i = 0; i < 25; i++) {
      if ( i === 0){
        array.push("I am 1 strange loop.");
      } else {
        array.push('I am '+ i + ' strange loop.');
      }
    }

  return array;
}
