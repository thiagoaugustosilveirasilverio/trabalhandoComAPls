const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser){
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser() {
    axios.get("http://localhost:5500/api/1")
     .then(response => {
         userName.textContent = response.data.name
         userCity.textContent = response.data.city
         userID.textContent = response.data.id
         userAvatar.src = response.data.avatar
     })
     catch(error => console.error(error))
}

getUsers()
getUser()
const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}
//addNewUser()