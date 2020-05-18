const ctx = canvas.getContext('2d');

class Line{
    constructor(x,y,color){
        this.positions = [[x,y]];
        this.angle = 2*Math.random()*Math.PI;
        const xSpeed = Math.sin(this.angle);
        const ySpeed = Math.cos(this.angle);
        this.direction = [xSpeed, ySpeed];
        this.positions.push([this.positions[0][0]+this.direction[0],
            this.positions[0][1]+this.direction[1]]);
        
        this.color = color;
        this.thickness = 5;
        this.rightIsPressed = false;
        this.leftIsPressed = false;
    }

    lineDraw(previousPositions, nextPositions){
        ctx.lineWidth = 7;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(previousPositions[0], previousPositions[1]);
        ctx.lineTo(nextPositions[0],nextPositions[1]);
        ctx.stroke();
        //this.positions.push([this.positions[this.positions.length-1][0]+this.direction[0],
            //this.positions[this.positions.length-1][1]+this.direction[1]]);
        this.positions.push([this.positions[this.positions.length-1][0]+Math.sin(this.angle),
            this.positions[this.positions.length-1][1]+Math.cos(this.angle)]);
    }

    move(){
        document.addEventListener('keydown', e => {
            if(e.keyCode === 39){
                this.rightIsPressed = true;
            }
        });

        document.addEventListener('keyup', e => {
            if(e.keyCode === 39){
                this.rightIsPressed = false;
            }
        });

        document.addEventListener('keydown', e => {
            if(e.keyCode === 37){
                this.leftIsPressed = true;
            }
        });

        document.addEventListener('keyup', e => {
            if(e.keyCode === 37){
                this.leftIsPressed = false;
            }
        });
        if(this.rightIsPressed){
            this.angle = this.angle-0.03;
            //Math.sqrt(1-this.direction[0]*this.direction[0]);
        }
        if(this.leftIsPressed){
            this.angle = this.angle+0.03;
        }
    }
}


export default Line;