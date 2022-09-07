
const secondHand= document.querySelector('.second-hand');
const minsHand =document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//random background color on each visit
document.querySelector('html').style.background='#'+Math.floor(Math.random()*16777215).toString(16);

// calculte Date
function setDate(){

    const now=new Date();

    const seconds=now.getSeconds();
    secondHand.style.transition = (seconds==0) ? "none" : "all 0.5s cubic-bezier(0.11, 2.75, 0.34, 0.99)";
    const secondsDegrees = ((seconds/60)*360)+90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins=now.getMinutes();
    minsHand.style.transition=(mins==0) ? "none" : "all 0.5s cubic-bezier(0.11, 2.75, 0.34, 0.99)";
    const minsDegrees=((mins/60)*360)+((seconds/60)*6)+90;
    minsHand.style.transform=`rotate(${minsDegrees}deg)`;


    const hour=now.getHours();
    hourHand.style.transition=(hour==0) ? "none" : "all 0.5s cubic-bezier(0.11, 2.75, 0.34, 0.99)";
    const hourDegrees=((hour/12)*360)+((mins/60)*30)+90;
    hourHand.style.transform=`rotate(${hourDegrees}deg)`;

}

//repeat setDate() each second
setInterval(setDate,1000);