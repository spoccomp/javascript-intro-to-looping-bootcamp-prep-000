var myArray =[];
function forLoop(array) {
//var array = [];

    for (var i = 0; i < 25; i++) {
      if ( i === 0){
        myArray.push("I am 1 strange loop.");
      } else {
        myArray.push('I am '+ i + ' strange loop.');
      }
    }

  return myArray;
}
