const shapeTxt = document.getElementById("shape-txt");
const shapeWidth = document.getElementById("width-txt");
const shapeHeight = document.getElementById("height-txt");
const shapeRadius = document.getElementById("radius-txt");
const shapeArea = document.getElementById("area-txt");
const shapePerimeter = document.getElementById("perimeter-txt");
const canvas = document.getElementById("shape-canvas");
const rectWdth = document.getElementById("rect-wdth");
const rectHght = document.getElementById("rect-hght");
const rectBtn = document.getElementById("rect-btn");
const sqrLngth = document.getElementById("sqr-lngth");
const sqrBtn = document.getElementById("sqr-btn");
const crclRds = document.getElementById("crcl-rds");
const crclBtn = document.getElementById("crcl-btn");
const trnglHght = document.getElementById("trngl-hght");
const trnglBtn = document.getElementById("trngl-btn");

class Shape {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcX = () => {
    let min = 362;
    let max = 942;
    //sum is range between 362 and 942 fo px/ Can use 25-75 for %
    let sum = Math.floor(Math.random() * (max - min + 1) + min);
    return sum;
  };

  calcY = () => {
    let min = 223;
    let max = 797;
    //sum is range between 223 and 797 for px/ can use 20-85 for %
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
      shapeTxt.textContent = `${this.constructor.name}`;
      shapeRadius.textContent = `${radius}`;
      shapePerimeter.textContent = `${Math.round(diameter * Math.PI)}`;
      shapeArea.textContent = `${Math.round(radius * radius * Math.PI)}`;
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
      shapeTxt.textContent = `${this.constructor.name}`;
      shapeHeight.textContent = `${height}`;
      shapeWidth.textContent = `${height}`;
      shapeArea.textContent = `${Math.round(0.5 * height * height)}`;
      shapePerimeter.textContent = `${Math.round(
        2 * height + 1.41421356237 * height
      )}`;
    });

    this.newTriangle.addEventListener("dblclick", () => {
      this.newTriangle.remove();
      this.clearTxt();
    });

    canvas.appendChild(this.newTriangle);
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super(height, width);

    this.newRectangle = document.createElement("div");
    this.newRectangle.classList.add("rectangle");
    this.newRectangle.style.height = `${height}px`;
    this.newRectangle.style.width = `${width}px`;
    this.newRectangle.style.left = `${this.calcX()}px`;
    this.newRectangle.style.top = `${this.calcY()}px`;

    this.newRectangle.addEventListener("click", () => {
      this.clearTxt();
      shapeTxt.textContent = `${this.constructor.name}`;
      shapeWidth.textContent = `${width}`;
      shapeHeight.textContent = `${height}`;
      shapeArea.textContent = `${height * width}`;
      shapePerimeter.textContent = `${width * 2 + height * 2}`;
    });

    this.newRectangle.addEventListener("dblclick", () => {
      this.newRectangle.remove();
      this.clearTxt();
    });

    canvas.appendChild(this.newRectangle);
  }
}

class Square extends Shape {
  constructor(length) {
    super(length, length);

    this.newSquare = document.createElement("div");
    this.newSquare.classList.add("square");
    this.newSquare.style.height = `${length}px`;
    this.newSquare.style.width = `${length}px`;
    this.newSquare.style.left = `${this.calcX()}px`;
    this.newSquare.style.top = `${this.calcY()}px`;

    this.newSquare.addEventListener("click", () => {
      this.clearTxt();
      shapeTxt.textContent = `${this.constructor.name}`;
      shapeWidth.textContent = `${length}`;
      shapeHeight.textContent = `${length}`;
      shapeArea.textContent = `${length * length}`;
      shapePerimeter.textContent = `${length * 2 + length * 2}`;
    });

    this.newSquare.addEventListener("dblclick", () => {
      this.newSquare.remove();
      this.clearTxt();
    });

    canvas.appendChild(this.newSquare);
  }
}

rectBtn.addEventListener("click", () => {
  let clearVal = () => {
    rectHght.value = "";
    rectWdth.value = "";
  };
  if (rectHght.value === "" || rectWdth.value === "") {
    return alert("No values detected!");
  } else if (rectHght.value === rectWdth.value) {
    alert("Invalid values detected!");
    return clearVal();
  }
  if (rectHght.value < 0 || rectWdth.value < 0) {
    alert("Invalid value detected!");
    return clearVal();
  } else {
    new Rectangle(rectHght.value, rectWdth.value);
    return clearVal();
  }
});

sqrBtn.addEventListener("click", () => {
  let clearVal = () => (sqrLngth.value = "");
  if (sqrLngth.value === "") {
    return alert("No value detected!");
  } else if (sqrLngth.value < 0) {
    alert("Invalid value detected!");
    return clearVal();
  } else {
    new Square(sqrLngth.value);
    return clearVal();
  }
});

crclBtn.addEventListener("click", () => {
  let clearVal = () => (crclRds.value = "");
  if (crclRds.value === "") {
    return alert("No value detected!");
  } else if (crclRds.value < 0) {
    alert("Invalid value detected!");
    return clearVal();
  } else {
    new Circle(crclRds.value);
    return clearVal();
  }
});

trnglBtn.addEventListener("click", () => {
  let clearVal = () => (trnglHght.value = "");
  if (trnglHght.value === "") {
    return alert("No Value Detected");
  } else if (trnglHght.value < 0) {
    alert("Invalid value detected!");
    return clearVal();
  } else {
    new Triangle(trnglHght.value);
    return clearVal();
  }
});
