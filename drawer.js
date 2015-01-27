window.onload = function() {
  draw();
}; 

function draw(){
 var drawing = document.getElementById("canvas");
 var con = drawing.getContext("2d");
 
 imgData = con.getImageData(0, 0, dimensions.width, dimensions.height);
   
  map.resetMap();
  
  for (i=400; i<dimensions.height; i++){
    for(j=dimensions.width / 2; j<dimensions.width; j++){
      map.putPixel(new Pixel(j,i,COLOR.BLUE))
    }
  }
  
  con.putImageData(map.toImageData(imgData), 0, 0);
 }