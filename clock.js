// JavaScript File
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var tau = Math.PI * 2;
var bg = new Image();
bg.src = 'bokeh.jpg';
ctx.drawImage(bg, 1500, 869);
ctx.strokeStyle = '#ffffff';
ctx.arc(1500/2, 869/2, 0, tau, false);
ctx.stroke();