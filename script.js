//assign new variable shapeTxt as #shape-txt element
const shapeTxt = document.getElementById("shape-txt");
//assign new variable shapeWidth as #width-txt element
const shapeWidth = document.getElementById("width-txt");
//assign new variable shapeHeight as #height-txt element
const shapeHeight = document.getElementById("height-txt");
//assign new variable shapeRadius as #radius-txt element
const shapeRadius = document.getElementById("radius-txt");
//assign new variable shapeArea as #area-txt element
const shapeArea = document.getElementById("area-txt");
//assign new variable shapePerimeter as #perimeter-txt element
const shapePerimeter = document.getElementById("perimeter-txt");

//assign Shape as new class
class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
