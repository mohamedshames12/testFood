// script for menu items

let menu = document.getElementById("menu");
let navBar = document.querySelector(".navber")
menu.addEventListener("click", (eo) => {
    navBar.classList.toggle("active");
})

window.onscroll = () => {
    navBar.classList.remove("active");
}


let reviewContainer = document.querySelector(".review .container-review");
let boxReview = document.querySelectorAll(".box-review");

document.querySelectorAll(".section-food .container-food .box .btn-Details").forEach(product => {
    product.onclick = () => {
       reviewContainer.style.display = "flex";
       let dataProduct = product.getAttribute("data-product");
       boxReview.forEach(review => {
        let dataReview = review.getAttribute("data-review");
        if (dataProduct == dataReview) {
            review.classList.add("active")
        }
       })
    }
})


boxReview.forEach(close => {
    close.querySelector(".fa-times").onclick = () => {
        reviewContainer.style.display = "none";
        close.classList.remove("active")
    }
})

