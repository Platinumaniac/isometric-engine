var notile = loadImage("assets/noTile.png")
function drawTiles(tilemap,tile,origin)
{   
    var rows = 0
    var layers = 0
    var xo = 0
    var yo = 0
    tilemap.forEach(layer => {
        rows = 0
        layer.forEach(row => {
            xo = -16*rows
            yo = 8*rows-layers*16
            row.forEach(point => {
                if (point != -1 && point != 0){ctx.drawImage(tile,origin[0]+xo,origin[1]+yo);}
                else if (point == -1){ctx.drawImage(notile,origin[0]+xo,origin[1]+yo);}
                xo += 16;
                yo += 8;
            });
            rows += 1
        });
        
        layers += 1
    });
    
    
}

var testTile = loadImage("assets/dfltTile.png")