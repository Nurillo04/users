const albumDiv = document.querySelector(".cards.albums");
const spanHeading = document.querySelector(".heading1 span");

async function fetchAlbum() {
  let id = JSON.parse(localStorage.getItem("userId"));
  spanHeading.innerHTML = id;
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/albums");
    let data = await res.json();
    let filteredData = data.filter((td) => td.userId === id);
    displayAlbums(filteredAlbum);
  } catch (error) {
    console.log(error);
  }
}

fetchAlbum();

function displayAlbums(albums) {
  let str = "";

  albums.map((album) => {
    str += `
      <div class='cardtodo'>
        <h2> ${album.title}</h2>
        <h2>Id: ${user.id}</h2>
        <p> ${album.completed ? "✅" : "❌"}</p>
      </div>
    `;
  });

  albumDiv.innerHTML = str;
}
