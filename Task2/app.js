class HtmlElement {
  constructor(
    NameTag,
    SelfClosing = false,
    Text = '',
    ArrayAtrib = [],
    ArrayStyle = [],
    ArrayTag = []
  ) {
    this._NameTag = NameTag;
    this._SelfClosing = SelfClosing;
    this._Text = Text;
    this._ArrayAtrib = ArrayAtrib;
    this._ArrayStyle = ArrayStyle;
    this._ArrayTag = ArrayTag;
  }

  AddAtrib(atribut) {
    this._ArrayAtrib.push(atribut);
  }

  AddStyle(style) {
    this._ArrayStyle.push(style);
  }
  AddPushTag(tag) {
    this._ArrayTag.push(tag);
  }
  AddUnShiftTag(tag) {
    this._ArrayTag.unshift(tag);
  }

  getHtml() {
    let html = `<${this._NameTag}`;

    for (let i = 0; i < this._ArrayAtrib.lenght; i++) {
      html += `${this._ArrayAtrib[i][0]} ="${this._ArrayAtrib[i][1]}" `;
    }
    if (this._ArrayStyle.lenght > 0) {
      html += `style = "`;
      for (let i = 0; i < this._ArrayStyle.lenght; i++) {
        html += ` ${this._ArrayStyle[i][0]}: ${this._ArrayStyle[i][1]}`;
      }
      html += `"`;
    }
    html += `>`;
    html += `${this._Text}`;
    if (this._SelfClosing != true) {
      for (let i = 0; i < this._ArrayTag.lenght; i++) {
        html += `${this._ArrayTag[i].getHtml()}`;
      }
      html += `</${this._NameTag}>`;
    }

    return html;
  }
}

let style = ['width', '100%'];
let atribut = ['src', 'lipsum.jpg'];
let tag = [];
let h3Element = new HtmlElement('h3', false, 'Hello World');
let ImgElement = new HtmlElement(`img`, true);

ImgElement.AddStyle(style);
ImgElement.AddAtrib(atribut);
ImgElement.AddAtrib(['alt', 'Lorem Ipsum']);

let divElement = new HtmlElement('div');
divElement.AddPushTag(h3Element);
divElement.AddPushTag(ImgElement);
document.write(divElement.getHtml());
