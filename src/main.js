const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const cw = canvas.width;
const ch = canvas.height;
const __ = require('lodash');
import Line from './Line';
import PowerUp from './powerUps/PowerUp';




const checkWinner = (tip,positions) => {
   for(let i = 0; i<positions.length;i++){
   
       if(tip === positions[i]){
           alert('')
       }
   }
}

const checkWallCollision = (tip) => {
    if((tip[0] >= 500 || tip[0] <= 0 || tip[1] >= 500 || tip[1] <= 0 )){
      
    }
}

const checkCollisionItself = (positions) => {

    if(__.uniq(positions).length===positions.length){
        
        console.log('ok');
    }
   
}

var isWinner = false;
const firstLine = new Line(200,200,'blue');
const secondLine = new Line(100,100,'red');

ctx.fillStyle = 'black';
ctx.fillRect(0,0,cw,ch);

const gameLoop = () => {
    firstLine.lineDraw(firstLine.positions[firstLine.positions.length-2],
        firstLine.positions[firstLine.positions.length-1]);
        firstLine.move();
        checkWallCollision(firstLine.positions[firstLine.positions.length - 1]);
        checkWallCollision(secondLine.positions[secondLine.positions.length - 1]);
        checkWinner(firstLine.positions[firstLine.positions.length-1], secondLine.positions);
        checkWallCollision(firstLine.positions);
        checkCollisionItself(firstLine.positions);
        
        //checkWinner(firstLine.positions[firstLine.positions.length-1]+[firstLine.thickness,firstLine.thickness], secondLine.positions,isWinner);
        //checkWinner(secondLine.positions[secondLine.positions.length-1], firstLine.positions,isWinner);
        

    secondLine.lineDraw(secondLine.positions[secondLine.positions.length-2],
        secondLine.positions[secondLine.positions.length-1]);
        if(!isWinner){
            requestAnimationFrame(gameLoop);
        }
   
}



requestAnimationFrame(gameLoop);
