const box = document.querySelector(".box");

const bigBox = document.querySelector(".bigBox");

const input = document.querySelector(".input");

const button = document.querySelector("button");

const addValue = () => {
    if (input.value > 10) {
        box.textContent = input.value + " your number is too big, try use 1-10";
    }
    else if (input.value < 1) {
        box.textContent = input.value + " your number is too small, try use 1-10";
    }
    else {
    box.textContent = input.value + " that's how many seconds you'll have to wait";

    const timer = () => {
        const newText = document.createElement("p")
        bigBox.append(newText); 
        newText.textContent = new Date().getUTCSeconds()
        }
    
    const seconds = `${input.value * 1000}`
    localStorage.setItem("localValue", input.value)
    setInterval(timer, seconds)
    }
    return
}
box.textContent = localStorage.localValue;


button.addEventListener("click", addValue)


