function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Ejemplo:
console.log("Tirada de dado de 6 caras:", rollDice(6));
console.log("Tirada de dado de 20 caras:", rollDice(20));
