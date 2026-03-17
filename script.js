var canvas = document.getElementById("matrix");
var ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var letters = "01SUSHANTMATRIXHACKER";
letters = letters.split("");

var fontSize = 14;
var columns = canvas.width / fontSize;

var drops = [];

for (var x = 0; x < columns; x++)
drops[x] = 1;

function draw() {

ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#0F0";
ctx.font = fontSize + "px monospace";

for(var i=0;i<drops.length;i++){

var text = letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random()>0.975)
drops[i]=0;

drops[i]++;

}

}

setInterval(draw,33);



function register(){

let user = document.getElementById("newuser").value
let pass = document.getElementById("newpass").value

localStorage.setItem(user,pass)

alert("REGISTER SUCCESS")

location.href="index.html"

}

function login(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

let stored = localStorage.getItem(user)

if(stored == pass){

localStorage.setItem("loggedUser",user)

location.href="dashboard.html"

}
else{

alert("ACCESS DENIED")

}

}