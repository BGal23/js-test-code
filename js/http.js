const httpBox = document.querySelector(".http__box");
const httpButton = document.querySelector(".http__button")
const findFolder = document.querySelector(".find__folder")
const findNumber = document.querySelector(".find__number")
const findGrup = document.querySelector(".find__grup")

const mainPage = "https://jsonplaceholder.typicode.com"

const fetchThink = () => {
    fetch(`${mainPage}/${findFolder.value}?_limit=${findNumber.value}&_page=${findGrup.value}`, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.text()
    })
    .then(data => {
        addNewThink(data)
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
}

const options = {
    method: "GET",
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
}}

const addNewThink = (data) => {
    const folder = document.createElement("div")
    httpBox.append(folder)
    folder.textContent = data
}

httpButton.addEventListener("click", fetchThink)

// let a = 0
// let b = 1
// let c = 1

// for (let i = 0; i < 20; i++) {

//     c = a + b;
//     a = b;
//     b = c;
//     console.log(c)
// }