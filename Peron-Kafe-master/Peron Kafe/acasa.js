"use strict"
var canvas = document.getElementById("canvas"); 
var width = window.innerWidth;
var height = window.innerHeight;
canvas.width = width;
canvas.height = height;
var c = canvas.getContext("2d");
var minWidth = 35 / 100 * canvas.width; // Punct plecare Ox
var maxWidth = 60 / 100 * canvas.width; // Punct maxim Ox
var dx = (maxWidth - minWidth) / 20; // Viteza Ox
var minHeight = 20 / 100 * canvas.height; // Punct plecare Oy
var maxHeight = 30 / 100 * canvas.height; // Punct maxim Oy
var dy = (maxHeight - minHeight) / 20; // Viteza Oy
var x1 = minWidth;
var y1 = minHeight;
var x2 = maxWidth;
var y2 = maxHeight;
var alpha = 0;
var i;

function animate1() { // Linie sus
    c.beginPath();
    c.moveTo(minWidth, minHeight);
    c.lineTo(x1, minHeight);
    c.strokeStyle = "#FFFFFF";
    c.stroke();
    if (x1 < maxWidth) x1 += dx;
    if (x1 > maxWidth) x1 = maxWidth;
}

function animate2() { // Linie dreapta
    c.beginPath();
    c.moveTo(maxWidth, minHeight);
    c.lineTo(maxWidth, y1);
    c.strokeStyle = "#FFFFFF";
    c.stroke();
    if (y1 < maxHeight) y1 += dy;
    if (y1 > maxHeight) y1 = maxHeight;
}

function animate3() { // Linie jos
    c.beginPath();
    c.moveTo(maxWidth, maxHeight);
    c.lineTo(x2, maxHeight);
    c.strokeStyle = "#FFFFFF";
    c.stroke();
    if (x2 > minWidth) x2 -= dx;
    if (x2 < minWidth) x2 = minWidth;
}

function animate4() { // Linie stanga
    c.beginPath();
    c.moveTo(minWidth, maxHeight);
    c.lineTo(minWidth, y2);
    c.strokeStyle = "#FFFFFF";
    c.stroke();
    if (y2 > minHeight) y2 -= dy;
    if (y2 < minHeight) y2 = minHeight;
}

function animate5() { // Titlu
    c.font = "5vw Kylets";
    c.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
    c.fillText("Peron Kafe", canvas.width * 37.5 / 100, canvas.height * 29 / 100);
    if (alpha < 1) alpha += 0.0005;
}

function animate() {
    requestAnimationFrame(animate);
    animate1();
    animate2();
    animate3();
    animate4();
    animate5();
}

function resize() {
    canvas.height = 0;
}

animate();
resize();
//setTimeout(resize, 2000);
function reveal(){
    document.getElementById("c1").style.opacity=1;
    
    
}
setTimeout(reveal,2000);