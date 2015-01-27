var dimensions = {
  width : 500,
  height : 500
}

var map = {
  pixels : [],
  emptyMap : function(){
    var size = dimensions.height*dimensions.width*4;
    var arr = new Uint8ClampedArray(size);
    for (i=0; i<arr.length; i++){
      arr[i++] = 255;
      arr[i++] = 255;
      arr[i++] = 255;
      arr[i] = 255;
    }
    return arr;
  },
  toImageData: function(data){
    data.data.set(this.emptyMap());
    for(i=0; i<this.pixels.length; i++){
      for(j=0; j<this.pixels[i].length; j++){
        var p = this.pixels[i][j];
        if(p != null) {
          var y = (((data.height-1)-p.y)*data.width);
          var index = (p.x+y) * 4;
          data.data[index++] = p.color.r;
          data.data[index++] = p.color.g;
          data.data[index++] = p.color.b;
          data.data[index] = 255;
        }else{
          //if pixel is null, delete it
          this.pixels[i].splice(j,1);
        }
      }
    }
    return data;
  },
  registerPixels: function(pixels){
    this.pixels.push(pixels);
  }
}