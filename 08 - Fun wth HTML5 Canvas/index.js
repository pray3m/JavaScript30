// first we select the canvas
const canvas = document.querySelector('#draw');
const ctx= canvas.getContext('2d');

 // resizing it 
canvas.width= window.innerWidth;
canvas.height= window.innerHeight;

 // define the line specs
ctx.strokeStyle ='#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap ='round';
ctx.lineWidth=50;


ctx.font ="50px Arial";
ctx.fillText("Draw on me !😼", window.innerWidth/3,window.innerHeight/2);
ctx.font="20px Ubuntu";
ctx.fillText("(Just for desktop with a mouse🐭)",(window.innerWidth/3)+20,(window.innerHeight/2)+50);


let isDrawing=false;
let lastX=0;
let lastY=0;
let hue=0;
let direction=true;

function draw(e){
    //stop the function if not moused down
    if(!isDrawing) return;
    console.log(e);
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX,e.offsetY];
    hue++;
    if(hue>360){
        hue=0;
    }

    if(ctx.lineWidth>= 100 || ctx.lineWidth<=10){
        direction= !direction;
    }

    if(direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }

}

canvas.addEventListener('mousedown',(e)=> {
    isDrawing=true;
    [lastX, lastY] = [e.offsetX,e.offsetY];
});
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',() => isDrawing=false);
canvas.addEventListener('mouseout',()=> isDrawing=false);
