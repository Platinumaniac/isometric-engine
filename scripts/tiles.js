
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


function colTiles(tilemap,origin){
    var top = new colPoly(0,0,zoom,[[origin[0],origin[1]+8],[origin[0]+16,origin[1]],[origin[0]+32,origin[1]+8],[origin[0]+16,origin[1]+16]])
    var left = new colPoly(0,0,zoom,[[origin[0],origin[1]+8],[origin[0]+16,origin[1]+16],[origin[0]+16,origin[1]+32],[origin[0],origin[1]+24]])
    var right = new colPoly(0,0,zoom,[[origin[0]+16,origin[1]+16],[origin[0]+32,origin[1]+8],[origin[0]+32,origin[1]+24],[origin[0]+16,origin[1]+32]])
    var bottom = new colPoly(0,0,zoom,[[origin[0],origin[1]+24],[origin[0]+16,origin[1]+32],[origin[0]+32,origin[1]+24],[origin[0]+16,origin[1]+16]])
    var leftcol = false
    var rightcol = false
    var topcol = false
    var bottomcol = false
    var xo = 0
    var yo = 0
    var rows = 1
    var layers = 0
    var tiles
    tilemap.forEach(layer=>{
        rows = 0
        console.log(layer)
        layer.forEach(row=>{
            console.log(row)
            xo = -64*rows
            yo = 32*rows-layers*64
            tiles = 0
            row.forEach(tile=>{
                console.log(tile)
                top.draw("#FFFFFF",0.25)
                left.draw("#ff0000",0.25)
                right.draw("#00ff00",0.25)
                bottom.draw("#0000ff",0.25)
                xo +=64
                yo += 32
                top.x = xo
                top.y = yo
                left.x = xo
                left.y = yo
                right.x = xo
                right.y = yo
                bottom.x = xo
                bottom.y = yo
                tiles += 1
            });
            rows += 1
        });
        layers += 1
    });
    return [topcol,leftcol,rightcol,bottomcol],[]
}
var testTile = loadImage("assets/dfltTile.png")