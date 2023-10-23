const canvas = document.getElementById("view");
const ctx = canvas.getContext("2d");

var zoom = 4
var screenScroll = [0,0]
var mouseClick = false
var mouseDelta = [0,0]

function updateScreen()
{
canvas.width = window.innerWidth/zoom;
canvas.height = window.innerHeight/zoom;
}

window.onload = updateScreen

window.addEventListener("resize",()=>{updateScreen();});
setInterval(loop,16)
function loop()
{
    if (mouseClick)
    {screenScroll[0] +=Math.round((mouseDelta[0]));
    screenScroll[1] += Math.round((mouseDelta[1]));
    mouseDelta = [0,0]
}
    updateScreen()
    drawTiles(currentMap,testTile,screenScroll)
}
