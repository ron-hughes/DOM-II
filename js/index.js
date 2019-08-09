// Your code goes here
    

// sign up buttons
let nav = document.getElementsByClassName("nav-link")
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
const navArr = [...nav]; // create array from navigation


navArr.forEach(function(e, index){ // looping over each menu item in nav
    e.addEventListener('click', () => {
    e.style.backgroundColor = "red";
    })
})


buttonArr.forEach(function(e) {
    e.addEventListener('mouseover', pushButton) // looping over each element in array and adding event listener to it
    e.addEventListener('mouseout', whiteBack)
})


document.addEventListener('keypress', keyPress)



