// Your code goes here
    

// sign up buttons
let nav = document.getElementsByClassName("nav")
let buttons = document.getElementsByClassName("btn")

// functions

function pushButton() {
    this.parentElement.style.backgroundColor = "lightgrey"
    this.parentElement.style.borderRadius = "20px"  
}

function whiteBack() {
    this.parentElement.style.backgroundColor = "white" // change parent element
}

function keyPress(e) {
    if (e.key === 'escape') {
        alert('dont press the escape key')
    }

}


// event listeners
const buttonArr = [...buttons]; // create array from HTMLCollection (or NodeList)
const navArr = [...nav];

buttonArr.forEach((e) => {
    e.addEventListener('mouseover', pushButton)
    e.addEventListener('mouseout', whiteBack)
})

document.addEventListener('keypress', keyPress)



