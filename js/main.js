const usersDiv = document.querySelector(".cards.users");

async function fetchUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    displayUsers(data);
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();

function displayUsers(users) {
  let str = "";

  users.map((user) => {
    str += `
      <div class='card'>
        <h2 class='title2'>Name: ${user.name}</h2>
        <h4 class='title4'> ${user.username}</h4>
        <h2>Id: ${user.id}</h2>
        <p class='email'>Email: ${user.email}</p>
        <p class='email'>Website: ${user.website}</p>
        <p class='email'>Address: ${user.address} </p>
        <p class='email'>Phone: ${user.phone} </p>
        <a class='link' href="/pages/posts.html" onclick="getTodos(${user.id})">Posts</a>
        <a class='link' href="/pages/todos.html" onclick="getTodos(${user.id})">Todos</a>
        <a class='link' href="/pages/todos.html" onclick="getTodos(${user.id})">Alboms</a>
      </div>
     
    `;
  });

  usersDiv.innerHTML = str;
}

function getTodos(id) {
  localStorage.setItem("userId", JSON.stringify(id));
}
