let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(task) {
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
const products = [
  { name: "Product A", price: 200, rating: 4 },
  { name: "Product B", price: 100, rating: 5 }
];

products.sort((a, b) => b.rating - a.rating);
