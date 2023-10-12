const crudBox = document.querySelector(".crud__box")
const button = document.querySelector(".crud__btn")

const basic = "https://jsonplaceholder.typicode.com/"
let codeStatus;

const options = {
    method: 'post'
}

const checkMyCat = async () => {
    const get = await axios.get (`${basic}posts`, options)
    return get.status
}

checkMyCat()
    .then(data => {
        codeStatus = data
    })
    .catch(error => {
        console.log(error)
    })

const showMyCat = () => {
    crudBox.innerHTML = `<img src="https://http.cat/${codeStatus}">`
}

checkMyCat()
button.addEventListener("click", showMyCat)





