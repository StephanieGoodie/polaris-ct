import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static  properties() {
    return {
      name: { type: String },
      link: { type: String },
      class: {type: String},
      hover: {type: Boolean, reflect: true },
      primaryOutlined: {
        type: Boolean,
        reflect: true,
       // attribute: "primary-outlined",
      },
      primaryFilled: {
        type: Boolean,
        reflect: true,
        //attribute: "primary-filled",
      },
      tinted: {
        type: Boolean,
        reflect: true,
      },
      lightOutlined: {
        type: Boolean,
        reflect: true,
        //attribute: "light-outlined",
      },
      lightFilled: {
        type: Boolean,
        reflect: true,
        //attribute: "light-filled",
      },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;
        margin-top: 35px;
        padding-left: 9px;
        
      }

      .wrapper {
        padding: 18px 9px;
        border: 2px solid;
        border-radius: 3px;
      color: #00ff51;
    }
/**.link,
      :host([active]) .link { 
        background-color : #e4e5e7;
        border: 2px solid #e4e5ef;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
      }

      .link:hover,
      :host([placebo]) .link { 
        background-color : #1fb61f;
        border: 2px solid #21b11c;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
      } */
.link{
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        border: 2px solid;
        border-radius: 3px;
        font-size: 28px;
      }
.link:hover{
        background-color : #e4e5e7;
        border: 2px solid #e4e5ef;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
      }
.link:focus {
        background-color: #45637c;
        border: 2px solid #45637c;
        border-radius: 3px;
        color: #cce9ff;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
      }

      .link,
      :host([tinted]) .link {
        background-color: #45627c;
        border: 2px solid #45637c;
        border-radius: 3px;
        color: #cce9ff;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }
      :host([tinted]:hover) .link {
  background-color: #216a7c;
  border: 2px solid #005fa9;
  border-radius: 3px;
  color: #e5e9ec;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
      }
      :host([tinted]:focus) .link {
  background-color: #063d4e;
  border: 2px solid #063d4e;
  border-radius: 3px;
  color: #e5e9ec;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;}


      .link,
      :host([lightOutlined]) .link {
        background-color: #001e44;
        border: 2px solid #eff0ff;
        border-radius: 3px;
        color: #cce9ff;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }
      :host([lightOutlined]:hover) .link {
  background-color: #005fa9;
  border: 2px solid #005fa9;
  border-radius: 3px;
  color: #e5e9ec;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
      }
      :host([lightOutlined]:focus) .link {
  background-color: #063d4e;
  border: 2px solid #063d4e;
  border-radius: 3px;
  color: #e5e9ec;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;}

      .link,
      :host([lightFilled]) .link {
        background-color: #cce9ff;
        border: 2px solid #cce9ff;
        border-radius: 3px;
        color: #001e44;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }
      :host([lightFilled]:hover) .link {
  background-color: #005fa9;
  border: 2px solid #005fa9;
  border-radius: 3px;
  color: #e5e9ec;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
      }
      :host([lightFilled]:focus) .link {
  background-color: #063d4e;
  border: 2px solid #063d4e;
  border-radius: 3px;
  color: #e5e9ec;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;}
      
      
      .link,
      :host([primaryOutlined]) .link{ 
        background-color: transparent;
        border: 2px solid #005fa9;
        border-radius: 3px;
        color: #005fa9;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }
      
      :host([primaryOutlined]:hover) .link {
  background-color: #005fa9;
  border: 2px solid #005fa9;
  border-radius: 3px;
  color: #e5e9ec;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
      }
      :host([primaryOutlined]:focus) .link {
  background-color: #063d4e;
  border: 2px solid #063d4e;
  border-radius: 3px;
  color: #e5e9ec;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;}


      .link,
      :host([primaryFilled]) .link{
        background-color: #005fa9;
        border: 2px solid #005fa9;
        border-radius: 3px;
        color: #ededed;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }
      :host([primaryFilled]:hover) .link {
        background-color: transparent;
        border: 2px solid #005fa9;
        border-radius: 3px;
        color: #005fa9;
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
      }

      :host([primaryFilled]:focus) .link {
  background-color: #063d4e;
  border: 2px solid #063d4e;
  border-radius: 3px;
  color: #e5e9ec;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;}
      

      span {
        padding: 8px 4px;
        border: 2px solid #3681bb;
        border-radius: 5px;
        color: #fff;
        font-size: 20px;
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
    return html`<a class="link" href="${this.link}"><slot>${this.name}</slot></a>`;
  }
}
