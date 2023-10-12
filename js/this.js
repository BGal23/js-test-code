const btn = document.querySelector(".this__btn")
const box = document.querySelector(".this__box")

const farm = {
    cows: 4,
    pigs: 9,
    chicken: {
        red: 6,
        white: 5,

        showChicken() {
            return console.log(this)
        }
    },

    showAnimals() {
        return console.log(this)
    },

    showCallback(number) {
        return console.log(this, number)
    }
}

const callback = (callback) => {
    farm.showCallback("1")
    console.log(callback("2"), "callback")
}

btn.addEventListener("click", () => {
    farm.showAnimals()
    farm.chicken.showChicken()
    callback(farm.showCallback.bind(farm))
})

// function foo(hey) {
//     console.log(this.dogs, this.cats, this.cows, "animals obj", hey)
// }

// const animals = {
//     dogs: 4,
//     cats: 6,
//     cows: [3, 4, 5],
// }

// const newFunction = foo.bind(animals)
// newFunction("hey")