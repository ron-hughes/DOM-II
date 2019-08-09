// Your code goes here
    // sign up buttons
let buttonA = document.querySelector(".content-pick .btn")
let buttonB = document.querySelector(".content-pick .btn:nth-child(2)")
let buttonC = document.querySelector(".content-pick .btn:nth-child(3)")

let destA = document.querySelector(".content-pick .destination")
let destB = document.querySelector(".content-pick .destination:nth-child(2)")
let destC = document.querySelector(".content-pick .destination:nth-child(3)")

function pushButton() {
    destA.style.backgroundColor = "lightgrey"
    destA.style.borderRadius = "20px"
}
function whiteBack(event) {
    parent.style.backgroundColor = "white"
}

buttonA.addEventListener('mouseover', pushButton)
buttonA.addEventListener('mouseout', whiteBack)


