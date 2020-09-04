class definebar extends HTMLElement{

  terima(terima){
    this._data = terima;
    this.render();
    }  
  constructor(){
    super();
    fetch(`https://covid19.mathdro.id/api`,{
      method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
          return this.terima(responseJson);
        }).catch((Error) => {
          alert("Periksa koneksi Internet Anda");
        })
        
        
      }
   
    render(){
      
        this.innerHTML=`
        <div class="row">
        <div class="col s12 center m4">
          <div class="card-panel white hoverable">
            <span class="grey-text flow-text">
            <h4 class="center black-text">Infected</h4> 
            <h2>${this._data.confirmed.value} People</h2>
            <p class="black-text">Counted at the time</p>
            <h5 class="center date"></h5>
            <h5 class="center time"></h5>
            </span>
          </div>
        </div>
        <div class="col s12 center m4">
          <div class="card-panel white hoverable">
            <span class="grey-text flow-text">
                <h4 class="center black-text">Recovered</h4>
                <h2>${this._data.recovered.value} People</h2>
                <p class = "black-text">Counted at the time</p>
                <h5 class="center date"></h5>
                <h5 class="center time"></h5>
                </span>
          </div>
        </div>
        <div class="col s12 center m4">
          <div class="card-panel white hoverable">
            <span class="grey-text flow-text">
                <h4 class="center black-text">Deaths</h4>
                <h2>${this._data.deaths.value} People</h2>
                <p class="black-text">Counted at the time</p>
                <h5 class="center date"></h5>
                <h5 class="center time"></h5>
            </span>
          </div>
        </div>
      </div>`;
    }

}
customElements.define("define-bar",definebar)