class footbar extends HTMLElement {
    
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode: "closed"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this._shadowRoot.innerHTML = `
      <style>
      @font-face {
        font-family: balon;
        src: url(../font/balon/BalooPaaji2-Medium.ttf);
        font-weight: bold;
      }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .bg-foot{
        height: 160px;
        text-align: center;
        width: 100%;
        background-color: #212121;
        color: white;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    table{
        width:100%;
        border: none;
    }
    td{
        padding : 5px;
        width: 50%;
        text-align: center;
    }
    .sosmed{
        max-width: 50px;
    }
      </style>
      <div class="bg-foot">
      <table>
        <tr>
          <td>Contact</td>
          <td>Dev Profile</td>
         </tr>
         <tr>
           <td>Company Profile</td>
           <td>About Dev</td>
         </tr>
       </table>
       <p>Follow Us</p>
       <span><a href="https://www.instagram.com/daniramadhan_17/" target="_blank"><img class="sosmed" src="./src/img/ig.png" alt="@daniramadhan_17"></a></span> 
       <span><a href="https://www.facebook.com/kripset.ajep?ref=bookmarks"target="_blank"><img class="sosmed" src="./src/img/fb.png" alt="dani ramadhan"></a></span> 
       </div> 
       `
    };
}
customElements.define("foot-bar-shadow",footbar);