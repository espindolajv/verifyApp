const checkbox = document.getElementById("subscribe-input")

const js = document.getElementById("js-input")
const ts = document.getElementById("ts-input")
const py = document.getElementById("py-input")

const button = document.getElementById("btn-submit")

button.onclick = () => {
    const pSub = document.getElementById("pSub")
    if(checkbox.checked){
        pSub.textContent = "You're a subscriber!"
    }else{
        pSub.textContent = "You're not a subscriber"
    }

    const pStack = document.getElementById("pStack")
    if(js.checked){
        pStack.textContent = "You're student of JavaScript"
    }
    else if(ts.checked){
        pStack.textContent = "You're student of TypeScript"
    }
    else if(py.checked){
        pStack.textContent = "You're student of Python"
    }
}