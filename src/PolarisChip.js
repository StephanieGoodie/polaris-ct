import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static  properties() {
    return {
      name: { type: String },
      link: { type: String },
      class: {type: String},
      primaryOutlined: {
        type: Boolean,
        reflect: true,
        attribute: "primary-outlined",
      },
      primaryFilled: {
        type: Boolean,
        reflect: true,
        attribute: "primary-filled",
      },
      tinted: {
        type: Boolean,
        reflect: true,
      },
      lightOutlined: {
        type: Boolean,
        reflect: true,
        attribute: "light-outlined",
      },
      lightFilled: {
        type: Boolean,
        reflect: true,
        attribute: "light-filled",
      },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;
      }

      .wrapper {
      display: flex; /* Use Flexbox to fully wrap the elements */
      align-items: center; /* Vertically center the elements */
      padding-inline: 8px 4px;
      color: #00ff51;
    }


      :host([primaryOutlined]) .wrapper,
      :host([primaryFilled]) .wrapper {
        background-color: #b4a0a0;
      }

      :host([tinted]) .wrapper {
        background-color: #e4e5e7;
      }

      .link{
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        border: 2px solid;
        border-radius: 3px;
        font-size: 16px;
      }

      .link:focus {
        background-color: #45637c;
        border: 2px solid #45637c;
        border-radius: 3px;
        color: #cce9ff;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }
      .link:host([primaryFilled]){
        background-color: #005fa9;
        border: 2px solid #005fa9;
        border-radius: 3px;
        color: #ededed;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
      }
      .link,
      :host([primaryOutlined]).link {
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        border: 2px solid #3681bb;
        border-radius: 3px;
        color: #3681bb;
        font-size: 16px;
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
    this.name = 'Football';
    this.link = 'https://www.psu.edu/news/research';
    this.class = '';
  }

  render() {
    return html`<a class="${this.class}" href="${this.link}"><slot>${this.name}</slot></a>`;
  }
}
