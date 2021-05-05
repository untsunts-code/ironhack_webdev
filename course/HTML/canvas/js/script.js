const ctx = canvas.getContext("2d");  


ctx.beginPath(); //Inicia un trazo solo espera
ctx.moveTo(50, 50);// Coloca la posicion inicial para el trazo
ctx.lineTo(250, 50);// Termina de dibujar el trazo

ctx.stroke();  


ctx.moveTo(250, 50);  
ctx.lineTo(250, 150);  
// esto ejecuta mis dibujos
ctx.stroke();  


ctx.moveTo(250, 150);  
ctx.lineTo(50, 150);  
ctx.stroke();  


ctx.moveTo(50, 150);  
ctx.lineTo(50, 50);  
ctx.stroke();  
