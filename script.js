let minusButtons = [...document.querySelectorAll('[data-job="minus"]')];
let plusButtons = [...document.querySelectorAll('[data-job="plus"]')];
let itemQuantity = [...document.querySelectorAll('[data-job="quantity"]')];

let changeValue = function(){
    console.log(this.getAttribute("data-parent"));
    if (this.getAttribute("data-job")==="minus") {
        console.log(this.getAttribute("data-job"))
    } else if (this.getAttribute("data-job")==="plus") {
        console.log(this.getAttribute("data-job"))
    }
}

for (var i = 0; i < minusButtons.length; i++) {
    minusButtons[i].addEventListener('click', changeValue);
}

for (var i = 0; i < plusButtons.length; i++) {
    plusButtons[i].addEventListener('click', changeValue);
}










// if (this.getAttribute("data-job")==="minus") {
//     if(this.getAttribute("data-parent")==="video")
//     itemQuantity.getAttribute("data-parent")
// }



// let substractValue = function () {
//     console.log(this.getAttribute("data-parent"));
//     if (this.getAttribute("data-job")==="minus") {
//         console.log(this.getAttribute("data-job"))
//     }
// }

// let addValue = function () {
//     console.log(this.getAttribute("data-parent"));
// }

// let displayQuantity = function () {
//     console.log(this)
// }

