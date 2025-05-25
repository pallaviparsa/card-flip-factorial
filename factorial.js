function calculate() {
  const numInput = document.getElementById("number");
  const number = parseInt(numInput.value);

  if (isNaN(number) || number < 0) {
    alert("Please enter a valid positive integer.");
    return;
  }

  const iterative = factorialIterative(number);
  const recursive = factorialRecursive(number);

  document.getElementById("iterative-result").textContent = `Iterative: ${iterative}`;
  document.getElementById("recursive-result").textContent = `Recursive: ${recursive}`;

  document.getElementById("flip-card").classList.add("flip");
}

function flipBack() {
  document.getElementById("flip-card").classList.remove("flip");
}

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}
