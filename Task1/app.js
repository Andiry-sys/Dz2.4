class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get GetRadius() {
    return this._radius;
  }

  set SetRadius(value) {
    if (value > 0) {
      this._radius = value;
    }
  }

  get GetDiametr() {
    return this._radius * 2;
  }

  Area() {
    return Math.round(Math.PI * Math.pow(this._radius, 2));
  }
  CircumFerence() {
    return Math.round(Math.PI * this._radius * 2);
  }
}

let _circ = new Circle(10);
console.log(`Radius: ${_circ.GetRadius}`);
console.log(`Area: ${_circ.Area()}`);
console.log(`Diametr: ${_circ.GetDiametr}`);
console.log(`CircumFerence: ${_circ.CircumFerence()}`);
