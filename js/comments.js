const commentsDiv = document.querySelector(".cards.posts");
const spanHeading = document.querySelector(".heading1 span");

async function fetchComments() {
  let id = JSON.parse(localStorage.getItem("userId"));
  spanHeading.innerHTML = id;
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await res.json();
    let filteredData = data.filter((td) => td.userId === id);
    displayComments(filteredData);
  } catch (error) {
    console.log(error);
  }
}

fetchComments();

function displayComments(comments) {
  let str = "";

  comments.map((comment) => {
    str += `
      <div class='cardPost'>
        <h2> ${comment.title}</h2>
        <p>I ${comment.body}</p>
       
      </div>
    `;
  });

  commentsDiv.innerHTML = str;
}

{
  /* <a class='link' href="/pages/comments.html" onclick="getTodos(${user.id})">Comments</a> */
}
