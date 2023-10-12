const promise = (text, seconds) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(text), seconds)
    })
}

const firstPromise = promise("2sec", 2000)
const secondPromise = promise("1sec", 1000)

Promise.race([firstPromise, secondPromise])
    .then(value => console.log(value))
    .catch(error => console.log(error))
