var theme = new xpm_template();
theme.convert_xpm_to_canvas();

var hwnd = 0;
var ui = {
  html: new ui_class(10, 40, 800, 500, "Game Canvas", ++hwnd)
};

ui.html.generate_gfx();
ui.html.generate_html();

let n = document.createElement('canvas');
n.width = 800;
n.height = 500;
n.id = "canvas";
ui.html.dom_content.appendChild(n);

var mX = 0;
var mY = 0;
var size = 56;
var font = "\"Courier New\", Courier, monospace";
var scr = n;
var ctx = scr.getContext("2d");
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var width = scr.width;
var height = scr.height;
var drawclear = true;
ctx.font = size + "px " + font; 

var ships = [];
x = 100;
y = 100;
health = 100;
ships.push ( {x,y,health,} );
function draw() {
    //drawclear = false;
    ctx.fillText("testing",width/2,height/2);
}

function gri(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById('canvas').addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    mX = mousePos.x;
    mY = mousePos.y;
}, false);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function draw_func(){
    if(drawclear)
        ctx.clearRect(0,0,width,height);
    draw();
    window.requestAnimationFrame(draw_func);
}
window.requestAnimationFrame(draw_func);