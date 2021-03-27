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

  clearTxt() {
    shapeTxt.textContent = "";
    shapeWidth.textContent = "";
    shapeHeight.textContent = "";
    shapeRadius.textContent = "";
    shapeArea.textContent = "";
    shapePerimeter.textContent = "";
  }
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
      this.clearTxt();
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
      this.clearTxt();
    });

    canvas.appendChild(this.newCircle);
  }
}

class Triangle extends Shape {
  constructor(height) {
    super(height, height);

    this.newTriangle = document.createElement("div");
    this.newTriangle.classList.add("triangle");
    this.newTriangle.style.borderLeft = `${height}px solid transparent`;
    this.newTriangle.style.borderRight = `${height}px solid transparent`;
    this.newTriangle.style.borderBottom = `${height}px solid yellow`;
    this.newTriangle.style.left = `${this.calcX()}px`;
    this.newTriangle.style.top = `${this.calcY()}px`;

    this.newTriangle.addEventListener("click", () => {
      this.clearTxt();
      const triangleTxt = document.createTextNode(this.constructor.name);
      shapeTxt.appendChild(triangleTxt);
      const heightTxt = document.createTextNode(height);
      shapeHeight.appendChild(heightTxt);
      const widthTxt = document.createTextNode(height);
      shapeWidth.appendChild(widthTxt);
      const area = Math.round(0.5 * height * height);
      const areaTxt = document.createTextNode(area);
      shapeArea.appendChild(areaTxt);
      const perimeter = Math.round(2 * height + 1.41421356237 * height);
      const perimeterTxt = document.createTextNode(perimeter);
      shapePerimeter.appendChild(perimeterTxt);
    });

    this.newTriangle.addEventListener("dblclick", () => {
      this.newTriangle.remove();
      this.clearTxt();
    });

    canvas.appendChild(this.newTriangle);
  }
}
