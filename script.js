// 🚀 JavaScript Fundamentals Assignment
// =====================================

// ❤️ Part 1: Variables & Conditionals
let username = "Mike";
let age = 20;

// Use conditionals to display a message
if (age >= 18) {
  document.getElementById("greeting").textContent =
    `Hello, ${username}! You are an adult ✅`;
} else {
  document.getElementById("greeting").textContent =
    `Hello, ${username}! You are still young 👶`;
}

// ❤️ Part 2: Functions
function sayHello(name) {
  let message = `Hello, ${name}! Welcome to JavaScript functions 🎉`;
  document.getElementById("functionOutput").textContent = message;
}

// Function to calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Example usage
console.log("Total price:", calculateTotal(100, 0.15)); // 115

// 🔁 Part 3: Loops
// Example 1: for loop (print numbers)
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = `Number ${i}`;
  document.getElementById("numberList").appendChild(li);
}

// Example 2: while loop (countdown)
let countdown = 5;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// 🌐 Part 4: DOM Manipulation
// Example 1: Toggle message visibility
const toggleBtn = document.getElementById("toggleBtn");
const toggleMessage = document.getElementById("toggleMessage");

toggleBtn.addEventListener("click", () => {
  toggleMessage.classList.toggle("hidden");
});

// Example 2: Add new items to list
const addItemBtn = document.getElementById("addItemBtn");
const dynamicList = document.getElementById("dynamicList");
let itemCount = 0;

addItemBtn.addEventListener("click", () => {
  itemCount++;
  let newItem = document.createElement("li");
  newItem.textContent = `Dynamic Item ${itemCount}`;
  dynamicList.appendChild(newItem);
});

// Example 3: Change text color on hover
toggleMessage.addEventListener("mouseover", () => {
  toggleMessage.style.color = "red";
});
toggleMessage.addEventListener("mouseout", () => {
  toggleMessage.style.color = "black";
});
