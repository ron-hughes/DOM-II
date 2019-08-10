// Your code goes here
    

// Elements
let nav = document.getElementsByClassName("nav-link")
let buttons = document.getElementsByClassName("btn")
// let images = document.getElementsByTagName("img")
let images = document.getElementsByClassName("img-fluid rounded");

const buttonArr = [...buttons]; // create array from HTMLCollection (or NodeList)
const navArr = [...nav]; // create array from navigation
const imagesArr = [...images]; // create array from images

// Functions
function pushButton() {
    this.parentElement.style.backgroundColor = "lightgrey"
    this.parentElement.style.borderRadius = "20px"  
}

function whiteBack() {
    this.parentElement.style.backgroundColor = "white" // change parent element
}


// function contextMenu(e) {
//     alert('right clicked!')
// }


///////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Event listeners
navArr.forEach(function(e){ // looping over each menu item in nav
    e.addEventListener('dblclick', () => {
    e.style.backgroundColor = "red";
    })
    // e.addEventListener('click', whiteBack);
})

buttonArr.forEach(function(e) {
    e.addEventListener('mouseover', pushButton) // looping over each element in array and adding event listener to it
    e.addEventListener('mouseout', whiteBack)
})



imagesArr.forEach((e) => {
    e.addEventListener('wheel', () => {
        if (e.getAttribute("src") === "img/fun.jpg") {
        e.setAttribute("src", "img/adventure.jpg")
        }
        else {
            e.setAttribute("src", "img/fun.jpg") 
        }
    })
})


// document.addEventListener('contextmenu', contextMenu)

// console.log(imageArr[1])

// console.log(imagesArr);


