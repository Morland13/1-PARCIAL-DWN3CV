

//mi apikey
const apiKey = "19b6ca85f5b74e76afc7e48f95327904";
const elementoCiudad = document.getElementById("city");
const elementoBoton = document.getElementById("search");
const apiMap = "Aur13Vzf60HxJbKREntHPV1fkE1D2loT";
const eMapa = document.getElementById("mapa");
document.querySelector(".form-control").addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    weather.search();
  } 

});



elementoBoton.addEventListener("click", (event) => {
  event.preventDefault();
  const city = elementoCiudad.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&lang=es`
  )
    .then((resp) => resp.json())
    .then((json) => displayWeather(json));
    showLastSearch(); // Mostrar la última búsqueda 
    
});

function displayWeather(data) {
  const elementoCity = data.name;
  const elementoTemp = toCelsius(data.main.temp);
  const elementoWeather = data.weather[0].description;
  const elementoWind = data.wind.speed;
  const elementoHumidity = data.main.humidity;
  const elementoIcono = data.weather[0].icon;
  const elementoIconoURL = `https://openweathermap.org/img/wn/${elementoIcono}.png`;
  const elementoTempmax = toCelsius(data.main.temp_max);
  const elementoTempmin = toCelsius(data.main.temp_min);
  const elementoPresion = toCelsius(data.main.pressure);
  const elementoSensacion = toCelsius(data.main.feels_like);
  const elementoMapa = `https://api.tomtom.com/map/1/staticimage?key=${apiMap}&zoom=9&center=${data.coord.lon},${data.coord.lat}&format=jpg&layer=basic&style=main&width=900&height=300&view=Unified&language=en-GB`;
  
console.log(elementoMapa);

  document.querySelector(".city").innerText = "Clima en la ciudad de " + elementoCity;
  document.querySelector(".temp").innerText = "Temperatura " + elementoTemp.toFixed(1) + "°C";
  document.querySelector(".weather").innerText = "Se observa " + elementoWeather;
  document.querySelector(".wind").innerText = "Viento de " + elementoWind + " m/s";
  document.querySelector(".humidity").innerText = "Humedad del " + elementoHumidity + "%";
  document.querySelector(".temp_max").innerText = "Temperatura máxima " + elementoTempmax.toFixed(1) + "°C";
  document.querySelector(".temp_min").innerText = "Temperatura mínima " + elementoTempmin.toFixed(1) + "°C";
  document.querySelector(".pressure").innerText = "Presión atmosférica " + elementoPresion + " hPa";
  document.querySelector(".feels_like").innerText = "Sensación térmica " + elementoSensacion.toFixed(1) + "°C";
  eMapa.innerHTML =  `<img src = "${elementoMapa}">`;
  

  const iconoImg = document.createElement("img");
  iconoImg.src = elementoIconoURL;
  document.querySelector(".weather").appendChild(iconoImg);

  localStorage.setItem("lastSearch", elementoCity);
}


//cambio de kelvin a celcius
function toCelsius(kelvin) {
  return (kelvin - 273.15);
}





const elementCity = document.getElementById('theCity');
const elementoUltima = document.getElementById('lastCity');


localStorage.clear(); 
            localStorage.setItem("xxx",elementoCiudad.value);     
            

//MUESTRO LOCALSTORAGE

var ultimaBusqueda = localStorage.getItem("xxx");
elementoUltima.innerHTML = `<p class = "p-3 m-auto text-center">Última búsqueda: ${ultimaBusqueda}</p>`;
elementoBoton.addEventListener('click', laciudad);


function showLastSearch() {
  const lastSearch = localStorage.getItem("lastSearch");
  if (lastSearch) {
    elementoUltima.innerText = `Última búsqueda: ${lastSearch}`;
  }
}






















