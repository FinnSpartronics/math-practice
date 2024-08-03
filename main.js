let qEl = document.querySelector("#question")
let ans = document.querySelector("#answer")
let mode = document.querySelector("#mode")
let help = document.querySelector("#help")
let rangeMax = document.querySelector("#rangeMax")

let op = "+"
let qop = "+"
let a = 0
let b = 0
let qans = undefined

mode.addEventListener("click", () => {
    switch (op) {
        case "+":
            op = "-"
            mode.innerText = "Mode -"
            newQuestion()
            break
        case "-":
            op = "*"
            mode.innerText = "Mode *"
            newQuestion()
            break
        case "*":
            op = "/"
            mode.innerText = "Mode /"
            newQuestion()
            break
        case "/":
            op = "any"
            mode.innerText = "Mode Any"
            newQuestion()
            break
        case "any":
            op = "+"
            mode.innerText = "Mode +"
            newQuestion()
            break
    }
})

ans.focus()
ans.addEventListener("blur", () => {
    ans.focus()
})
ans.addEventListener("change", checkAns)
ans.addEventListener("keyup", checkAns)
ans.addEventListener("keypress", checkAns)
ans.addEventListener("keydown", checkAns)

function checkAns() {
    if (parseInt(ans.value) === qans) {
        newQuestion()
        ans.value = ""
    }
}

let limit = 13
function newQuestion() {
    a = Math.round(Math.random() * limit)
    b = Math.round(Math.random() * limit)
    if (op === "any") {
        let x = Math.random()
        if (x <= .25) qop = "+"
        else if (x <= .5) qop = "-"
        else if (x <= .75) qop = "*"
        else if (x <= 1) qop = "/"
    } else qop = op
    qEl.innerText = a + " " + qop + " " + b

    if (qop === "+") qans = a+b
    if (qop === "-") qans = a-b
    if (qop === "*") qans = a*b
    if (qop === "/") {
        b = Math.round(Math.random() * (limit-1))+1
        qans = a
        qEl.innerText = (a*b) + " / " + b
    }
}

newQuestion()

help.addEventListener("click", () => {
    qEl.innerText = qEl.innerText + " = " + qans
})

rangeMax.addEventListener("change", () => {
    limit = rangeMax.value
    newQuestion()
})