// Fibonacci Calculator in the Console

// Array to store Fibonacci numbers for memoization
const fibArray = [];

// Recursive function to calculate Fibonacci numbers
function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Use stored value if already calculated
    if (fibArray[n] !== undefined) return fibArray[n];

    // Calculate recursively and store in the array
    fibArray[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return fibArray[n];
}

// Function to calculate the sum of Fibonacci numbers up to a given number
function calculateFibonacciSum(num) {
    if (isNaN(num) || num < 0) {
        console.error("Por favor, ingresa un número válido (entero positivo).");
        return;
    }

    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += fibonacci(i);
    }

    console.log(`La suma de la secuencia Fibonacci hasta el número ${num} es: ${sum}`);
}

// Instrucción para el usuario
console.log("Bienvenido al Calculador de Fibonacci.");
console.log("Usa la función calculateFibonacciSum(número) en la consola para calcular.");


