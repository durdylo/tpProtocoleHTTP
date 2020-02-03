const USERS_ROUTE = 'http://jsonplaceholder.typicode.com/users';

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

  newusername.textContent = data.username
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
function getUserPostsData(userId){
  
}
