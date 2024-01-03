class colRect {
    constructor(x,y,w,h){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
    }
    draw(color){
        ctx.fillStyle = color
        ctx.rect(this.x,this.x,this.w,this.h)
        ctx.closePath();
    }
    colPoint(point) {var col = point[0] > this.x && point[0] < this.x + this.w && point[1] > this.y && point[1] < this.y + this.h}
}
class colPoly{
    constructor(x,y,size,points){
        this.x = x
        this.y = y
        this.size = size
        this.points = points
    }
    mark(){
        var view = document.getElementById("overlay")
        for (const child of view.children) {
            view.removeChild(child)
          }
        this.points.forEach(point=>{
            console.log(point)
            var marker = loadImage("assets/marker.png")
            marker.style.position = "absolute";
            marker.style.left = point[0]+'px';
            marker.style.top = point[1]+'px';
            view.appendChild(marker)
        });
        

    }
    scale(scale){
        var temppoints = []
        this.points.forEach(point=>{
            temppoints.push([point[0] * scale,point[1] * scale])
        });
        this.points = temppoints
    }
    draw(color,scale){    
        ctx.fillStyle = color
        ctx.beginPath();
        ctx.moveTo(this.points[0][0]+this.x*scale,this.points[0][1]+this.y*scale);
        this.points.forEach(point => {
            if (point != this.points[0])
            {ctx.lineTo(point[0]+this.x*scale,point[1]+this.y*scale);}
        });
        ctx.closePath();
        ctx.fill()
    }
    colPoint(point){
        var col = false
        this.points.forEach(polyPoint=>{
            var next = this.points.indexOf(polyPoint)+1
            if (next == this.points.length){next = 0}
            var NextPoint = this.points[next]
            if ((((polyPoint[1]+this.y)*this.size >= point[1] && (NextPoint[1]+this.y)*this.size < point[1]) || ((polyPoint[1]+this.y)*this.size < point[1]  && (NextPoint[1]+this.y)*this.size >= point[1])) && (point[0] < ((NextPoint[0]+this.x)*this.size-(polyPoint[0]+this.x)*this.size)*(point[1]-(polyPoint[1]+this.y)*this.size)/((NextPoint[1]+this.y)*this.size-(polyPoint[1]+this.y)*this.size)+(polyPoint[0]+this.x)*this.size))
            {col = !col}

        })
        return col
    }
}