import { toast } from "materialize-css";

function main (){

    const getData = param => {
        fetch(`https://covid19.mathdro.id/api/countries/${param}`,{
            method : "GET"
        })
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
         countryData(responseJson);
        })
        .catch(error => {
            alert("Maaf Data Yang Anda Minta Belum Tersedia");
        })
    }
     
    const selector = document.querySelector(".api-content");
    const countryData = country => {
        
        selector.innerHTML = `
        <div class="row">
        <div class="col s12 m4">
          <div class="card-panel red center radius">
          <span><img class ="logo" src ="./src/img/sakit.png"></span>  
          <h3>Infected<h3>
          <h3>${country.confirmed.value} People</h3>
        </div>
        </div>
        <div class="col s12 m4">
            <div class="card-panel red center radius">
            <span><img class ="logo" src ="./src/img/safe.png"></span>  
            <h3>Recovered<h3>
            <h3>${country.recovered.value} People</h3> 
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card-panel red center radius">
            <span><img class ="logo" src ="./src/img/death.png"></span>  
            <h3>Deaths<h3>
            <h3>${country.deaths.value} People</h3> 
            </div>
          </div>
        </div>
        `;
    }
    
    const search = document.querySelector(".btn");  
    search.addEventListener("click", () => {  
      const searchform = document.getElementById("input_text").value;  
      M.toast({html: `Search ${searchform}`})
      getData(searchform);
    })
     
}
export default main;