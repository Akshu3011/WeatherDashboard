var APIKey = "ddeaf2e65b5db636874978d44d4454d3";
var searchbtn = document.querySelector(".searchbtn");
var city = "";
var date = moment();

var currentDate = date.format("D/MM/YYYY");
console.log(currentDate); // "17/06/2022"

searchbtn.onclick = function (event) {
  event.preventDefault();
  citySearch();
};

function citySearch() {
  city = document.querySelector("#exampleDataList").value;

  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey +
    "&units=imperial";

  if (city != null) {
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        console.log(data.main.temp);
        //city name and date
        document.querySelector(".titleDate").innerHTML =
          city + " (" + currentDate + ")";
        //icon
        document.querySelector(".imgIcon").src =
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        //temp
        document.querySelector(".temp").innerHTML = "Temp: " + data.main.temp;
        //wind
        document.querySelector(".wind").innerHTML =
          "Wind: " + data.wind.speed + " MPH";
        //humidity
        document.querySelector(".humidity").innerHTML =
          "Humidity: " + data.main.humidity + " %";

        //get forecast data
        var forcastquery =
          "https://api.openweathermap.org/data/3.0/onecall?lat=" +
          data.coord.lat +
          "&lon=" +
          data.coord.lon +
          "&exclude=hourly,minutely&appid=" +
          APIKey;
        fetch(forcastquery)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log(data);
            //UV index
            document.querySelector(".uvIndex").innerHTML = data.current.uvi;

            var cardbody = document.querySelector(".carddata");
          
            for (var i = 1; i <= 5; i++) {
              var dateval = new Date((data.daily[i].dt)*1000).toLocaleDateString("en-US");
              console.log(dateval);
              cardbody.innerHTML = ` <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${dateval}</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>`;
            }
          });
      });
  }
}
