let canvas = document.querySelector('.cvs')
let ctx=  canvas.getContext('2d');
let tx = 0;
let ty = 0;
// Pozitia canvasului
let xPos = canvas.width/4; 
let yPos = canvas.height-70;
let beamPosX;
// Creare coin-urilor 
let coin  = {coinX:Math.floor(Math.random()*100),coinY:Math.floor(Math.random()*100)} 
let {coinX,coinY} = coin; 
let arr = [] ; 
let score = 0;
 let gravity = false;
 
function life(y)
{
    

 ctx.lineWidth = 3; 
 ctx.shadowBlur = 20;
ctx.shadowColor = "#4bcffa";
 ctx.strokeStyle = '#4bcffa';
 ctx.beginPath();


// 10 -raza
 // To make a full circle, the arc begins at an angle of 0 radians (0°), and ends at an angle of 2π radians (360°).
ctx.arc(560, 20+y, 10, 0, 2 * Math.PI, false);
ctx.stroke();
}

life();
// Player 
ctx.shadowBlur = 50;
ctx.shadowColor = "#f1c40f";
// umplere patrat 
ctx.fillStyle='#f1c40f';
// desenare patrat la pozitia (40,60)
// 75px inaltime , 75 latime 
 
   ctx.clearRect( beamPosX,0, 35, 600)
// Platforma
ctx.fillRect(xPos,yPos,50,50)

life(30);
     life(60);
     life(90);
// let drawCoin = () => {
//     ctx.shadowBlur = 50;
//     ctx.shadowColor = "red";
//     // umplere patrat cu culoarea rosie
//     ctx.fillStyle='red';
//     // desenare patrat la pozitia (40,60)
//     // 75px inaltime , 75 latime 
//     ctx.fillRect(coinX,coinY, 35, 35)
// }

// drawCoin();
 
// Metoda clearRect - face ca pixelii dintr-o zona rectangulara sa fie transparenti rgba(0,0,0,0)
// Coltul patratului va fi la pozitia x,y  

 function player()
{        

    
     // ctx.clearRect(0,0,canvas.width,canvas.height) va curata canvas-ul
     ctx.shadowBlur = 50;
     ctx.shadowColor = "#f1c40f";
     // umplere patrat 
     ctx.fillStyle='#f1c40f';
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    let moveBeams = ()=>{
 
        ctx.shadowColor = "#f1c40f";
    // umplere patrat 
    ctx.fillStyle='#f1c40f';
            // Genereaza un numar aleator pt beam de la 15 pana la 460
            let beamPosX =Math.floor(Math.random() * (540 - 15) + 15)
        
          
            ctx.clearRect( beamPosX,0, 35, 600)
            arr.push( ctx.fillRect(beamPosX,0, 35, 600))
     
    }



    setTimeout(moveBeams)
    ctx.fillRect(xPos+tx,yPos+ty, 50, 50) // de fiecare data cand utilizatorul va apasa o sageata dx si dy se vor schimba
    // iar player-ul se va deplasa
    // drawCoin();
      
     life(30);
     life(60);
     life(90);
}
window.addEventListener('keyup',(e)=>{
    switch(e.keyCode)
    {
       case 32:
       ty+=100;
    }
   player();
}); 


 



 window.addEventListener('keydown',(e)=>{
     switch(e.keyCode)
     {
        case 37:
            // sageata stanga
             tx-=5; 
            break;
        case 38:
            // sageata sus 
            ty-=5; 
            break;
        case 39:
            // sageata dreapta
            tx+=5;
            break;
        case 40:
            // sageata jos
            ty+=5;
            break;  
         case 32:
                // sageata jos
                ty-=35;
                // simularea gravitatiei
                gravity = true; 
                break; 
     }
     e.preventDefault();  // pentru a preveni deplasarea intregii pagini

     // Daca playerul a ajuns la marginea din dreapta
     // Playerul se va deplasa spre stanga
     if(xPos+tx >= canvas.width-60)
     {
         tx-=5;
     }
     // Daca playerul a ajuns la marginea din stanga
     if(xPos+tx < 0)
     {
         // playerul se va deplasa spre dreapta
         tx+=5;
     }

     // Daca pozitia playerului depaseste marginea de sus
     if(yPos+ty < 0)
     {
         // playerul se va deplasa in jos
         ty+=5;
     }
          // Daca pozitia playerului depaseste marginea de jos 
     if(yPos+ty > canvas.height-60)
     {
         // playerul se va deplasa in sus
         ty-=5;
     }

    
    
     player();
 
    
    
 })

