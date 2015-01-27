var dimensions = {
  width : 500,
  height : 500
}

var map = {
  rows : [],
  resetMap : function(){
    for (i=0; i<dimensions.height; i++){
      var row = [];
      for(j=0; j<dimensions.width; j++){
        row[j] = new Pixel(0,0,COLOR.WHITE);
      }
      this.rows[i] = row;
    }
  },
  toImageData: function(data){
    for (i=0; i<this.rows.length; i++){
      for(j=0; j<this.rows[i].length; j++){
        //REFACTOR
        var y = (((this.rows.length - 1)- i) * data.width);
        var x = j;
        index = (x+y) * 4;
        //
        var pixel = this.rows[i][j];
        data.data[index++] = pixel.color.r;
        data.data[index++] = pixel.color.g;
        data.data[index++] = pixel.color.b;
        data.data[index] = 255;
      }
    }
    return data
  },
  putPixel: function(pixel){
    this.rows[pixel.y][pixel.x] = pixel;
  }
}