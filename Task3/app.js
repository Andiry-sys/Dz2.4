class CssClass {
  constructor(name, styles) {
    this.name = name;
    this.styles = {};
    for (let key in styles) {
      if (this.checkKey(key)) {
        this.styles[key] = styles[key];
      }
    }
  }
  checkKey(key) {
    const style = document.body.style;
    return key in style;
  }
  setStyle(key, value) {
    if (!this.checkKey(key)) {
      return;
    }
    this.styles[key] = value;
  }
  unsetStyle(key) {
    delete this.styles[key];
  }
  getStyle(key) {
    return this.styles[key];
  }
  getCss() {
    return `.${this.name}${JSON.stringify(this.styles)
      .replace(/\,/g, '; \n')
      .replace(/"/g, '')}`;
  }
}
const main = new CssClass('red', { color: 'red' });
main.setStyle('font-size', '2em');
main.unsetStyle('color');
console.log(main.getCss());
