const todosDiv = document.querySelector(".cards.todos");
const spanHeading = document.querySelector(".heading1 span");

async function fetchTodos() {
  let id = JSON.parse(localStorage.getItem("userId"));
  spanHeading.innerHTML = id;
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    let filteredData = data.filter((td) => td.userId === id);
    displayTodos(filteredData);
  } catch (error) {
    console.log(error);
  }
}

fetchTodos();

function displayTodos(todos) {
  let str = "";

  todos.map((todo) => {
    str += `
      <div class='cardtodo'>
        <h2> ${todo.title}</h2>
      
        <p> ${todo.completed ? "✅" : "❌"}</p>
      </div>
    `;
  });

  todosDiv.innerHTML = str;
}
