function Pixel (x, y, color) {
  this.color = color;
  this.x = x;
  this.y = y;
}

var COLOR = {
  RED: {r:255, g:0, b:0},
  GREEN: {r:0, g:255, b:0},
  BLUE: {r:0, g:0, b:255},
  WHITE: {r:255, g:255, b:255},
  BLACK: {r:0, g:0, b:0}
}