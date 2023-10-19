import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: {type: String},
      active: { type: Boolean, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin:0 12px 12px 0;
      }
      .link:hover,
      :host([active]) .link { 
        background-color : #005fa9;
        border: 2px solid #005fa9;
        border-radius: 3px;
        color: #ededed;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }
      .link{ 
        font-weight: bold; 
        text-decoration: none; 
        padding: 8px 4px; 
        border: 2px solid #3681bb;
        border-radius: 3px;
        color: #3681bb;
        font-size: 16px;
      }
      .link:focus{
        background-color : #45637c;
        border: 2px solid #45637c;
        border-radius: 3px;
        color: #cce9ff;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }

      span {
        padding: 8px 4px;
        border: 2px solid #3681bb;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
      }

    `;
  }

  constructor() {
    super();
    //this.title = 'My boilerplate';
    this.name = 'Football';
    this.link = "https://www.psu.edu/news/research";
  
  }

  render() {
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></a>`;
  }
}
