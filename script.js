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

    newList.appendChild(newUsername)
  }
}


function getUsersData() {
  fetch(USERS_ROUTE)
    .then(response => response.json())
    .then(json => displayUsers(json))
}


getUsersData()

function displayUser(data) {
  let newCard = document.getElementById("cardUser")
  let newname = document.createElement("h5")
  newname.textContent = data.name
  newname.setAttribute("class", "card-title")
  newCard.appendChild(newname)

  let newusername = document.createElement("h6")
  newusername.textContent = data.username
  newusername.setAttribute("class", "card-subtitle mb-2 text-muted")
  newCard.appendChild(newusername)

  let newUserCity = document.createElement("p")
  newUserAdress = data.address
  newUserCity.textContent = newUserAdress.city
  newUserCity.setAttribute("class", "card-text")
  newCard.appendChild(newUserCity)
}

function getUserData(id) {
  fetch(USERS_ROUTE + "/" + id)
    .then(response => response.json())
    .then(json => displayUser(json))
}
getUserData(4)
