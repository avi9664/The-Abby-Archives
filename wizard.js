// JavaScript File
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var tau = Math.PI * 2; //SCREW PI TAU IS ALWAYS BETTER FOR LAZY PPL LIKE ME

var wiz = {
portal: function() {
    var portalGrad = ctx.createRadialGradient(200, 320, 155, 200, 320, 1);
    portalGrad.addColorStop(0, 'rgba(208, 168, 255, 0)');
    portalGrad.addColorStop(0.25, '#d0a8ff');
    portalGrad.addColorStop(1, '#8316ff');
    ctx.fillStyle = portalGrad;
    ctx.beginPath();
    ctx.arc(200, 320, 155, 0, tau, false);
    ctx.fill();
},

face: function() {
    var faceGrad = ctx.createLinearGradient(120, 240, 160, 180);
    faceGrad.addColorStop(0, '#edc891');
    faceGrad.addColorStop(1, '#E7B46A');
    ctx.fillStyle = faceGrad;
    ctx.beginPath();
    ctx.arc(143, 203, 40, 0, tau/2, true);
    ctx.arc(100, 220, 15, tau * 7/8, tau * 0.05, false);
    ctx.arc(143, 203, 40, tau * 1/3, tau, true);
    ctx.fill();
},

leftEye: function() {
    var eyeX = 141;
    var eyeY = 207;
    var eyeGrad1 = ctx.createRadialGradient(eyeX, eyeY, 5, eyeX, eyeY+2, 1);
    eyeGrad1.addColorStop(0, '#337a2c');
    eyeGrad1.addColorStop(1, '#19a337');
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.arc(142, 210, 8, tau/2, tau * 7/8, false);
    ctx.arc(140, 204, 8, tau, tau * 2/5, false);
    ctx.fill();
    ctx.fillStyle = eyeGrad1;
    ctx.beginPath();
    ctx.arc(eyeX-2, eyeY, 4.5, 0, tau, false);
    ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(eyeX-2, eyeY, 2, 0, tau, false);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(eyeX+1, eyeY-2, 1, 0, tau, false);
    ctx.fill();
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.arc(142, 210, 8, tau/2, tau * 7/8, false);
    ctx.arc(140, 204, 8, tau, tau * 2/5, false);
    ctx.stroke();
},

rightEye: function() {
    var eyeX = 114;
    var eyeY = 215;
    var eyeGrad2 = ctx.createRadialGradient(eyeX, eyeY, 5, eyeX, eyeY+2, 1);
    eyeGrad2.addColorStop(0, '#337a2c');
    eyeGrad2.addColorStop(1, '#19a337');
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.arc(115, 218, 8, tau * 3/4, tau * 7/8, false);
    ctx.arc(113, 212, 8, tau, tau * 0.2, false);
    ctx.fill();
    ctx.fillStyle = eyeGrad2;
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 5, tau * 0.7, tau * 0.25, false);
    ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(eyeX, eyeY, 2, tau * 0.7, tau * 0.25, false);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(eyeX+3, eyeY-2, 1, 0, tau, false);
    ctx.fill();
    ctx.beginPath();
    ctx.lineWidth = 0.5;
    ctx.arc(115, 218, 8, tau * 3/4, tau * 7/8, false);
    ctx.arc(113, 212, 8, tau, tau * 0.2, false);
    ctx.stroke();
}, 

nose: function() {
    var noseGrad = ctx.createLinearGradient(125, 232, 124, 204);
    noseGrad.addColorStop(0, '#edc891');
    noseGrad.addColorStop(1, '#E7B46A');
    ctx.fillStyle = noseGrad;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(123, 206);
    ctx.bezierCurveTo(120, 200, 127, 220, 123, 235);
    ctx.bezierCurveTo(132, 240, 130, 225, 135, 230);
    ctx.stroke();
    ctx.fill();
},

mustachio: function() {
    var mustacheGrad = ctx.createLinearGradient(122, 240, 140, 230);
    mustacheGrad.addColorStop(0, '#707070');
    mustacheGrad.addColorStop(1, '#bababa');
    ctx.fillStyle = mustacheGrad;
    ctx.beginPath();
    ctx.moveTo(132, 233);
    ctx.bezierCurveTo(129, 240, 129, 240, 122, 240);
    ctx.bezierCurveTo(129, 245, 129, 243, 135, 241);
    ctx.bezierCurveTo(150, 242, 155, 240, 159, 230);
    ctx.bezierCurveTo(145, 235, 142, 237, 132, 233);
    ctx.fill();
},

bodyBase: function() {
    var bodyBaseGrad = ctx.createLinearGradient(122, 240, 140, 230);
    bodyBaseGrad.addColorStop(0, '#0f0f43');
    bodyBaseGrad.addColorStop(1, '#191970');
    ctx.fillStyle = bodyBaseGrad;
    ctx.beginPath();
    ctx.moveTo(126, 256);
    ctx.lineTo(175, 360);
    ctx.bezierCurveTo(198, 365, 218, 362, 238, 332);
    ctx.lineTo(202, 232);
    ctx.lineTo(126, 256);
    ctx.fill();
},

rightCape: function() {
    var rightCapeGrad = ctx.createLinearGradient(159, 239, 200, 220);
    rightCapeGrad.addColorStop(1, '#800020');
    rightCapeGrad.addColorStop(0, '#34000D');
    ctx.fillStyle = rightCapeGrad;
    ctx.beginPath();
    ctx.moveTo(173, 221);  
    ctx.arc(154, 221, 20, 0, tau/4, false);
    ctx.lineTo(157, 245);
    ctx.bezierCurveTo(200, 250, 210, 262, 215, 270);
    ctx.bezierCurveTo(220, 225, 180, 220, 173, 221);
    ctx.fill();
},

hair: function() {
    var hairGrad = ctx.createLinearGradient(122, 240, 140, 230);
    hairGrad.addColorStop(0, '#707070');
    hairGrad.addColorStop(1, '#bababa');
    ctx.beginPath();
    ctx.moveTo(151, 190);
    ctx.bezierCurveTo(150, 212, 152, 212, 160, 220);
    ctx.bezierCurveTo(170, 225, 172, 240, 172, 270);
    ctx.lineTo(185, 282);
    ctx.bezierCurveTo(182, 265, 172, 240, 191, 223);
    ctx.bezierCurveTo(170, 200, 200, 205, 175, 180);
    ctx.lineTo(151, 190);
    ctx.stroke();
},

draw: function() {
    this.portal();
    this.face();
    this.leftEye();
    this.rightEye();
    this.nose();
    this.mustachio();
    this.bodyBase();
    this.rightCape();
    this.hair();
}
};

wiz.draw();