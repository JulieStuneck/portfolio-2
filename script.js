/*Bio Button*/
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/*Project 1*/
var modal1 = document.getElementById('proj1Modal');
var btn1 = document.getElementById("proj1Btn");
var span = document.getElementsByClassName("close1")[0];
btn1.onclick = function() {
    modal1.style.display = "block";
}
span.onclick = function() {
    modal1.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

/*Project 2*/
var modal2 = document.getElementById('proj2Modal');
var btn2 = document.getElementById("proj2Btn");
var span = document.getElementsByClassName("close2")[0];
btn2.onclick = function() {
    modal2.style.display = "block";
}
span.onclick = function() {
    modal2.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

/*Project 3*/
var modal3 = document.getElementById('proj3Modal');
var btn3 = document.getElementById("proj3Btn");
var span = document.getElementsByClassName("close3")[0];
btn3.onclick = function() {
    modal3.style.display = "block";
}
span.onclick = function() {
    modal3.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}