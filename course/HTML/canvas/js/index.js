const canvas = document.getElementById("canvas");
    // contexto
const ctx = canvas.getContext("2d");  

  
ctx.fillStyle = "peru";  
    //(x, y, width, height)
ctx.fillRect(100,25,100,100); // con relleno, sin bordes

ctx.clearRect(125,50,50,50); //sin relleno, sin bordes

ctx.strokeRect(137,63,25,25); // sin relleno, con bordes

ctx.fillStyle = "red";  

ctx.font = "30px Arial";

ctx.fillText("Este es un texto chido, /n ¿pasará /t algo si \n \t agrego esto?", 20, 20, 250);  

// Borremos el canvas //  


ctx.clearRect(0,0,canvas.width, canvas.height);  

// Dibujamos una imagen  
const image = new Image();  
  
image.src = "https://c4.wallpaperflare.com/wallpaper/535/638/527/street-fighter-backgrounds-sunset-res-clouds-fight-area-asian-tiger-wallpaper-preview.jpg"

image.onload = function(){
        //(img, x, y, w, h)
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
};


// new Character  

const character = new Image();  

character.src = "https://i.pinimg.com/originals/8e/bb/02/8ebb021259d8d541aeec28347dd47025.png";  

character.onload = function(){  
  
  ctx.drawImage(character, 240, 200, 50, 50)
};


