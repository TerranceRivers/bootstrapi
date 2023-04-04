let dogButton = document.querySelector('button')
let dogImg = document.querySelector('img')

let cityValue = document.querySelector("#city")
let getWeather = document.querySelector("#button-addon2")
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
let description = document.querySelector('#description')

 fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImg.src = data.message;
    })
    .catch(error => console.error(error));

  

  dogButton.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImg.src = data.message;
    })
    .catch(error => console.error(error));

    dogImg.appendChild("dogImg")
  });


getWeather.addEventListener('click', function(){
    let city = cityValue.value
    let url = encodeURI(`https://goweather.herokuapp.com/weather/${city}`);
  fetch(url)
  .then(response => response.json())
  .then(data => {
    temp.innerText= data.temperature;
    wind.innerText = data.wind;
    description.innerText = data.description;
  })
  .catch(error => console.error(error));
 
})

