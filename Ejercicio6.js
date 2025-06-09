function swap(array, index1, index2) {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}

// Ejemplo:
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

console.log(swap([...fantasticFour], 0, 3)); // Intercambia 1º y 4º
