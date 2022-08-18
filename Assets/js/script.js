
var APIKey="ddeaf2e65b5db636874978d44d4454d3";
var city="Seattle"
//var queryURL = "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={ddeaf2e65b5db636874978d44d4454d3}";
//var queryURL= "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid="+APIKey;
var queryURL="https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey; 
//var queryURL="https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid="+APIKey;
fetch(queryURL)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
      console.log(data);});

//var responseText = document.getElementById('response-text');


