
function makeArray() {
  const array = []
  const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < t; i++) {
    array.push("I am a " ${i} " strange loop.")
  }

  return [array, t]

}
