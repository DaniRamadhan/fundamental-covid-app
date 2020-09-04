class headbar extends HTMLElement{

    connectedCallback(){
        this.render();
    }
    
    render(){
        this.innerHTML =`
        <nav class="nav-extended green lighten-3">
        <div class="valign-wrapper">
        <ul>
        <li><img class ="logo hide-on-small-only" src ="src/img/pbb.png"></li>
        <li class="logo"><img class = "logo hide-on-small-only" src ="src/img/unicef.png"></li>
        <li class="logo"><img class = "logo" src ="src/img/who.png"></li> 
        </ul>
        </div>
        <div class="nav-content red center-align">
          <span class="nav-title">Save The World, Make a Better Place</span>
        </div>
      </nav>
        `;
    }

}
customElements.define("head-bar", headbar);