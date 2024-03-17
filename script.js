const apikey = "6571b7363900d96938e915a1758d5dc4" ;
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const SearchBox    = document.querySelector(".search input") ;
const SearchBtn    = document.querySelector(".search button") ;
const weatherimage = document.querySelector(".weather-icon") ;

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    let data = await response.json()

    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"ºC" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%" ;
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h" ;
    weatherimage.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

}

SearchBtn.addEventListener('click' , function(){
    checkWeather(SearchBox.value) ;
})


// if(data.weather[0].main == "Clouds"){ // weather me ek array return hota hai jisme 2 element hai , 0 me pura information hai isliye yaha weather[0] liya hai 
    //     weatherimage.src = "clouds.png" ;
    // }
    // else if(data.weather[0].main == "Clear"){
    //     weatherimage.src = "clear.png" ;
    // }
    // else if(data.weather[0].main == "Rain"){
    //     weatherimage.src = "rain.png" ;
    // }
    // else if(data.weather[0].main == "Drizzle"){
    //     weatherimage.src = "Drizzle.png" ;
    // }
    // else if(data.weather[0].main == "Mist"){
    //     weatherimage.src = "mist.png" ;
    // }
    // else if(data.weather[0].main == "Snow"){
    //     weatherimage.src = "snow.png" ;
    // }
    // else{
    //     weatherimage.src = "wind.png" ;
    // }

    // document.querySelector(".weather").style.display = "block" ;
