let Hslider, Vslider, RdShape;

function setup() {
  createCanvas(600, 600);
  Hslider = createSlider(1, 9, 8);
  Hslider.position(610, 25);
  Hslider.style("width", "160px");

  Vslider = createSlider(1, 9, 8);
  Vslider.position(610, 50);
  Vslider.style("width", "160px");

  RdShape = createRadio();
  RdShape.option("Rect");
  RdShape.option("RoundRect");
  RdShape.option("Circle");

  RdShape.selected("Rect");
  RdShape.position(610, 75);

  colorPicker = createColorPicker("#ed225d");
  colorPicker.position(0, height + 5);
}

function draw() {
  background(220);

  {
    background(colorPicker.color());
  }

  for (m = 0; m < Vslider.value(); m++) {
    for (i = 0; i < Hslider.value(); i++) {
      if (i % 2 == 1 && m % 2 == 1) {
        fill("pink");
      } else if (i % 2 == 0 && m % 2 == 0) {
        fill("orange");
      } else {
        fill("green");
      }

      if (RdShape.value() == "Rect") {
        rect(60 * i + 20, 60 * m, 50, 50);
      } else if (RdShape.value() == "RoundRect") {
        rect(60 * i + 20, 60 * m, 50, 50, 10);
      } else {
        circle(60 * i + 20, 60 * m, 50);
      }
    }
  }
}
