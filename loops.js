var array = [];
function makeArray(array) {
  //const array = [];
  const t = Math.floor(Math.random() * 10);

    for (var i = 0; i < t; i++) {
      if ( i === 0){
        array.push("I am 1 strange loop.");
      } else {
        array.push('I am'+ i + ' strange loop.');
      }
    }

  return array;
}
