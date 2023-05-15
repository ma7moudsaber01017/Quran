let confirmMsg = confirm("صلى على الحبيب");

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg" ,"06.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {

if (imgsArray.length >= 1) {

backgroundInterval = setInterval(() => {

// Get Random Number
let randomNumber = Math.floor(Math.random() * imgsArray.length);

// Change Background Image Url 
landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';

}, 10000);

}

}

randomizeImgs();

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

// Stop Propagation
e.stopPropagation();

// Toggle Class "menu-active" On Button
this.classList.toggle("menu-active");

// Toggle Class "open" On Links
tLinks.classList.toggle("open");

};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

if (e.target !== toggleBtn && e.target !== tLinks) {

// Check If Menu Is Open
if (tLinks.classList.contains("open")) {

    // Toggle Class "menu-active" On Button
    toggleBtn.classList.toggle("menu-active");

    // Toggle Class "open" On Links
    tLinks.classList.toggle("open");

}

}
// Stop Propagation On Menu 
tLinks.onclick = function (e) {
e.stopPropagation();
}

});


