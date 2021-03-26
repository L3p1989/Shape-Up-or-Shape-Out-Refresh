const shapeTxt = document.getElementById("shape-txt");

const shapeWidth = document.getElementById("width-txt");

const shapeHeight = document.getElementById("height-txt");

const shapeRadius = document.getElementById("radius-txt");

const shapeArea = document.getElementById("area-txt");

const shapePerimeter = document.getElementById("perimeter-txt");

const canvas = document.getElementById("shape-canvas");

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcX = () => {
    let min = 362;
    let max = 942;
    //sum is range between 362 and 942
    let sum = Math.floor(Math.random() * (max - min + 1) + min);
    return sum;
  };

  calcY = () => {
    let min = 223;
    let max = 797;
    //sum is range between 223 and 797
    let sum = Math.floor(Math.random() * (max - min + 1) + min);
    return sum;
  };
}

class Circle extends Shape {
  constructor(radius) {
    super(radius, radius);

    this.newCircle = document.createElement("div");
    this.newCircle.classList.add("circle");
    this.newCircle.style.width = `${radius * 2}px`;
    this.newCircle.style.height = `${radius * 2}px`;
    this.newCircle.style.left = `${this.calcX()}px`;
    this.newCircle.style.top = `${this.calcY()}px`;

    this.newCircle.addEventListener("click", () => {
      const diameter = radius * 2;
      const circleTxt = document.createTextNode(`${this.constructor.name}`);
      shapeTxt.appendChild(circleTxt);
      const radiusTxt = document.createTextNode(radius);
      shapeRadius.appendChild(radiusTxt);
      const circlePerimeter = Math.round(diameter * Math.PI);
      const perimeterTxt = document.createTextNode(circlePerimeter);
      shapePerimeter.appendChild(perimeterTxt);
      const circleArea = Math.round(radius * radius * Math.PI);
      const areaTxt = document.createTextNode(circleArea);
      shapeArea.appendChild(areaTxt);
    });

    this.newCircle.addEventListener("dblclick", () => {
      this.newCircle.remove();
    });

    canvas.appendChild(this.newCircle);
  }
}
