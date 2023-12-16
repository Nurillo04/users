const postsDiv = document.querySelector(".cards.posts");
const spanHeading = document.querySelector(".heading1 span");

async function fetchPosts() {
  let id = JSON.parse(localStorage.getItem("userId"));
  spanHeading.innerHTML = id;
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    let filteredData = data.filter((td) => td.userId === id);
    displayPosts(filteredData);
  } catch (error) {
    console.log(error);
  }
}

fetchPosts();

function displayPosts(posts) {
  let str = "";

  posts.map((post) => {
    str += `
      <div class='cardPost'>
        <h2> ${post.title}</h2>
        <p>I ${post.body}</p>
        <a class='btn'  href="/pages/comments.html"><button class"btn">Comments</button></a>
      </div>
    `;
  });

  postsDiv.innerHTML = str;
}

{
  /* <a class='link' href="/pages/comments.html" onclick="getTodos(${user.id})">Comments</a> */
}
