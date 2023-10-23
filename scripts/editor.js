currentMap = [
    [[1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1]],
    [[1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]],
    [[1,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,0],
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]]
    
]
document.getElementById("newMapForm").addEventListener("submit", (e) => {
    e.preventDefault();
    var width = e.target["width"].value;
    var height = e.target["height"].value;
    var tempmap = [[]]
    var rowIndex = 0
    for (const x of Array(parseInt(height))) {
        tempmap[0].push([])
        for (const x of Array(parseInt(width))) {
            tempmap[0][rowIndex].push(-1)
        }
        rowIndex ++
    }
    currentMap = tempmap
  });
function hideElement(id){document.getElementById(id).setAttribute("hide","")}
function showElement(id){document.getElementById(id).removeAttribute("hide")}
window.addEventListener("wheel", (event)=>{zoom -= (event.deltaY/100)/4});
window.addEventListener("mousemove",(event)=>{mouseDelta = [event.movementX/zoom,event.movementY/zoom]})
window.addEventListener("mousedown",(event)=>{mouseClick = true; })
window.addEventListener("mouseup",(event)=>{mouseClick = false});