window.onload = function() {
  draw();
}; 

function draw(){
 var drawing = document.getElementById("canvas");
 var con = drawing.getContext("2d");
 
 imgData = con.getImageData(0, 0, dimensions.width, dimensions.height);
  
  
  var pixels = [];
  map.registerPixels(pixels);
  
  setInterval(function(){drawSin(pixels, imgData, con);},1);
}

var u = 0;
function drawSin(pixels, imagedata, con){
  pixels.push(createPixel());
  pixels.push(createPixel());
  
  con.putImageData(map.toImageData(imgData), 0, 0);
}

function createPixel(){
  var p = new Pixel();
  p.color = COLOR.BLUE;
  p.x = u++;
  p.y = Math.ceil(Math.sin(u*0.1) * 10) + 200;
  return p;
}