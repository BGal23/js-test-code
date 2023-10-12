const input = document.querySelectorAll("input");
const classBtn = document.querySelectorAll(".class__btn")
const allUsers = document.querySelector("ol")

let usersList = [];
if (localStorage.getItem("users-list") !== null) {
    userslistJSON = [localStorage.getItem("users-list")]
    usersList = JSON.parse(userslistJSON)
}

class User {
    constructor({name, email, phone, id}) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.phone = phone
    }

    hello() {
        alert(`You have new user ${this.name}`)
    }
}

const newUser = () => {
    if (!input[0].value || !input[1].value || !input[2].value) {
        alert("Sorry, you must enter all data")
    }
    else {
        let userID = 1;
        usersList.forEach(check => {
            if (check.id === userID) {
                userID++
            }
            else {
                userID
            }
        })
        const user = new User ({
            id: userID,
            name: input[0].value,
            email: input[1].value,
            phone: input[2].value
        })
        usersList.push(user)
        localStorage.setItem("users-list", JSON.stringify(usersList))
        user.hello()
    }   
}

const selectUser = () => {
    const user = usersList.find(opt => opt.id === Number(input[3].value))
    if (!user) {
        input[4].value = ""
        input[5].value = ""
        input[6].value = ""
    }
    else {
        input[4].value = user.name
        input[5].value = user.email
        input[6].value = user.phone
    }
}

const editUser = () => {
    if (!input[4].value || !input[5].value || !input[6].value) {
        alert("Sorry, we don't have this user")
    }
    else {
    let id = Number(input[3].value)
    usersList.splice(id - 1, 1)
    
    const editUser = new User ({
        id: id,
        name: input[4].value,
        email: input[5].value,
        phone: input[6].value
    })

    usersList.push(editUser)
    localStorage.setItem("users-list", JSON.stringify(usersList))
}}

const deleteUser = () => {
    let id = Number(input[3].value)
    usersList.splice(id - 1, 1)
    localStorage.setItem("users-list", JSON.stringify(usersList))
}

const showUsersList = (usersList) => {
    usersList.sort((a,b) => (a.id-b.id))
    usersList.forEach(user => {
        const userBox = document.createElement("li")
        userBox.innerHTML = `
            ${user.name}
            ${user.email}
            ${user.phone} `
        allUsers.append(userBox)
    });
}

showUsersList(usersList)


input[3].addEventListener("input", selectUser)
classBtn[0].addEventListener("click", newUser)
classBtn[1].addEventListener("click", editUser)
classBtn[2].addEventListener("click", deleteUser)