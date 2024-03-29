
  AOS.init();


var menuOpen = false;


function toggleMenu() {
  if(!menuOpen) {
  document.getElementById("sidebar").style.width = "100%";
  document.getElementById("sidebar").style.background = "rgba(0, 0, 0, 0.7)";
  document.getElementById("hamButton").classList.add("is-active");
  menuOpen = true;
} else {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("sidebar").style.background = "rgba(0, 0, 0, 1)";
  document.getElementById("hamButton").classList.remove("is-active");
  menuOpen = false;
}
}

 // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    toggleMenu();
  });

function scrolltTop() {

  document.getElementById("top").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

}

function scrollAboutMe() {

  document.getElementById("aboutMe").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

}
function scrollAbilities() {

  document.getElementById("abilitiesPage").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

}
//
// function scrollProjects() {
//
//   document.getElementById("top").scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
// }



var canvas = document.querySelector("canvas");
console.log(canvas)
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


var mouse = {
  x: undefined,
  y: undefined
}
var rect = canvas.getBoundingClientRect();
var trueX = mouse.x - rect.left;
var trueY = mouse.y - rect.top;
//changeables-------------
canvas.style.left = "0";
canvas.style.top = "0";
canvas.style.padding = "0";
canvas.style.position = "absolute";
var canX = window.innerWidth;
var canY = window.innerHeight;
//------------------------
canvas.width = canX;
canvas.height = canY;

window.addEventListener("mousemove", function(event) {
   mouse.x = event.clientX;
   mouse.y = event.clientY + document.body.scrollTop;
  trueX = mouse.x - rect.left;
  trueY = mouse.y - rect.top;
})

var c = canvas.getContext("2d");

function randomNumber(min,max)
{
    return (Math.random()*(max-min+1)+min);
}

//create mouse object


var colorArray = [
  "#ff7f00",
  "#00ff00",
  "#ffff00",
  "#ff0000",
  "#0000ff",
  "#9400D3",
];


var maxRadius = 20;
//var minRadius = radius;


function Circle(x,y,radius,dx,dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.minRadius = radius;
  this.dx = dx;
  this.dy = dy;
  this.color = colorArray[Math.floor(Math.random()*colorArray.length)]; //random color chooser

//template of circle being drawn
  this.draw = function() {
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2);

    c.fillStyle = this.color;
    c.fill();
  }

//template of circle movement
//   this.update = function() {
// if(this.x-this.radius>canX) {
//   this.x=-this.radius;
// }
  this.update = function() {
if(this.y-this.radius>canY) {
  this.y=-this.radius;
if(this.x-this.radius>canX) {
     this.x=-this.radius;
   }
}
// if(this.x+this.radius < 0) {
//   this.x = canX+this.radius;
// }

// this.x+=this.dx;
this.y+=this.dy;

//interactivity

//when mouse close
if (trueX - this.x < 50 && trueX - this.x > -50
  && trueY - this.y < 50 && trueY - this.y > -50
  ) {
    if (this.radius < maxRadius) {
      this.radius += 4;
    }
} else if (this.radius > this.minRadius && this.radius-0.4 > 0) {
  this.radius -=0.4;
}

  }
}




var circleArray = [];

for (var i = 0; i < 600; i++) {
var x = Math.random()*canX;

var y = Math.random()*canY;
var dy = (12-radius)/7;
var radius = Math.random()*6+0.1;
var dx = (7-radius)/7;
circleArray.push(
  new Circle(x,y,radius,dx,dy))
}

function animate() {

  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth,innerHeight);

  for (var i = 0; i <circleArray.length; i++) {
    circleArray[i].draw();
    circleArray[i].update();
  }

}
animate();
