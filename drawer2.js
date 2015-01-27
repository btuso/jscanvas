window.onload = function() {
  draw();
}; 

function draw(){
 var drawing = document.getElementById("canvas");
 var con = drawing.getContext("2d");
 
 imgData = con.getImageData(0, 0, dimensions.width, dimensions.height);
  
  
  var pixels = [];
  for (i=400; i<500; i++){
    for(j=0; j<500; j++){
      pixels.push(new Pixel(j,i,COLOR.WHITE));
    }
  }
  map.registerPixels(pixels);
  
  setInterval(function(){moveSquare(pixels, imgData, con);},30);
}

var u = 0;
function moveSquare(pixels, imagedata, con){
  for(i=0;i<pixels.length;i++){
    if(pixels[i] != null){
      pixels[i].x += 15;
    }
  }
  var colors = [COLOR.BLUE,COLOR.BLACK,COLOR.GREEN,COLOR.RED];
  for(i=0;i<100 && u<pixels.length;i++){
   var rand = Math.ceil(Math.random() * 4-1);
    pixels[u].color = colors[rand];
    u++;
  }
  
  con.putImageData(map.toImageData(imgData), 0, 0);
}