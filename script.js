var sideNavbar = document.querySelector(".side-navbar")

function openSideNav() {
    sideNavbar.style.left = "0"
}

function closeSideNav() {
    sideNavbar.style.left = "-60%"
}

var submitButton=document.getElementById("submit")

submitButton.addEventListener("click",function(event){
    event.preventDefault()
})