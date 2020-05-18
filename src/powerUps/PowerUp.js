const ctx = canvas.getContext('2d');

class PowerUp {
    constructor(x,y,color){
        this.x = x;
        this.y = y;
        this.color = color;
    }

    spawn(){
        ctx.beginPath();
        ctx.fillStyle=this.color;
        ctx.arc(this.x, this.y, radius, 0, 2*Math.PI);
        ctx.fill();
    }
}

export default PowerUp;