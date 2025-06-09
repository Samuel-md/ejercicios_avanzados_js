// Punto 1
function findArrayIndex(array, text) {
  return array.indexOf(text);
}

 // Punto 2
function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

// Ejemplos:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Rey")); // 4
console.log(removeItem([...mainCharacters], "Leia")); // sin "Leia"
console.log(removeItem([...mainCharacters], "Yoda")); // no existe, devuelve igual
