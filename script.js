const USERS_ROUTE = 'https://jsonplaceholder.typicode.com/users';
const POSTS_ROUTE = 'https://jsonplaceholder.typicode.com/posts';

let lastClick;
let postContainer = document.getElementById("postsContainer")


function displayUsers(data) {
  let newList = document.getElementById("listUserName")
  // console.log(data);
  for (let i = 0; i < data.length; i++) {
    let currentElement = data[i]
    let newUsername = document.createElement("button")
    newUsername.textContent = currentElement.name
    newUsername.setAttribute("class", "list-group-item list-group-item-action")
    newUsername.setAttribute("type", "button")
    newUsername.setAttribute("data-toggle", "list")
    newUsername.addEventListener("click", function() {
      postContainer.innerHTML = ""
      if (lastClick !== undefined) {
        lastClick.style.fontWeight = "normal";
      }
      newUsername.style.fontWeight = "bold";
      lastClick = newUsername;
      getUserPostsData(currentElement.id, currentElement.name, currentElement.username)
      getUserData(currentElement.id)
    });
    newList.appendChild(newUsername)
  }


}

function getUsersData() {
  fetch(USERS_ROUTE)
    .then(response => response.json())
    .then(json => displayUsers(json))
}


getUsersData()
let newCard = document.getElementById("cardUser")
let newname = document.createElement("h5")
let newusername = document.createElement("h6")
let newUserCity = document.createElement("p")
let newUserWebsite = document.createElement("a")

function displayUser(data) {
  newname.textContent = data.name
  newname.setAttribute("class", "card-title font-weight-bold")
  newCard.appendChild(newname)

  newusername.textContent = "@" + data.username
  newusername.setAttribute("class", "card-subtitle mb-2 text-muted")
  newCard.appendChild(newusername)

  newUserCity.textContent = data.address.city
  newUserCity.setAttribute("class", "card-text")
  newCard.appendChild(newUserCity)

  newUserWebsite.textContent = data.website
  newUserWebsite.setAttribute("class", "card-link")
  newUserWebsite.setAttribute("href", "#")
  newCard.appendChild(newUserWebsite)
}



function getUserData(id) {
  fetch(USERS_ROUTE + "/" + id)
    .then(response => response.json())
    .then(json => displayUser(json))
}


function displayUserPosts(data, name, username) {

  for (let i = data.length - 1; i >= 0; i--) {
    let currentElement = data[i]
    let cardPost = document.createElement("div")
    cardPost.setAttribute("class", "card shadow col mb-3")
    postContainer.appendChild(cardPost)

    let newPost = document.createElement("div");
    newPost.setAttribute("class", "card-body")
    cardPost.appendChild(newPost)

    newName = document.createElement("h5")
    newName.textContent = name + " "
    newUsername = document.createElement("span")
    newName.appendChild(newUsername)

    newUsername.textContent = "@" + username
    newUsername.setAttribute("class", "card-subtitle mb-2 text-muted")
    newPost.appendChild(newName)

    let newTitle = document.createElement("h5")
    newTitle.textContent = currentElement.title
    newTitle.setAttribute("class", "card-title font-weight-bold")
    newPost.appendChild(newTitle)



    let newBody = document.createElement("p")
    newBody.textContent = currentElement.body
    newBody.setAttribute("class", "card-text")
    newPost.appendChild(newBody)

  }

}

function getUserPostsData(userId, name, username) {
  fetch(POSTS_ROUTE + "?userId=" + userId)
    .then(response => response.json())
    .then(json => displayUserPosts(json, name, username))
}
