
class content extends HTMLElement {
    
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML =`
        <div class="parallax-container">
      <div class="parallax"></div>
    </div>
      <div class="container white">
        <h2 class="center">Details of Covid-19 contracted countries</h2>      
        <div class="row">
          <div class = "col s3"></div>
              <div class="input-field center-align col s6">
                <input id="input_text" type="text" data-length="20" placeholder="Search Country" ><a class="waves-effect waves-light btn">Search</a>
              </div>
              <div class = "api-content"></div>
              <div class="center hide-on-small-only"><img class="flag"src="./src/img/who.png" alt=""></div>
            </div>
        </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"></div>
    </div>
        `;
    }
}
customElements.define("content-app",content);