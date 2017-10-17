console.log(superagent);

const request = superagent
let statesTable = document.querySelector('.countries-container')
request
.get('https://restcountries.eu/rest/v2/all')
.then(function(res) {
console.log(res.body);
const states = res.body

states.forEach(function(obj) {

statesTable.innerHTML += `
<div class="country-card">
  <img class="country-flag" src="${obj.flag}" alt="flag">
  <h4 class="country-name">${obj.name}</h4>
  <p class="country-capital">${obj.capital}</p>
</div>
`

})
})
