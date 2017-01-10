
function getWeather(lat, lon) {
	var link = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=06170c100199dbae1e223cc3dfad960b";

	$.getJSON(link, function(data) {
		console.log(data);
		generateWeather(data);
	})
}

var generateWeather = function(item) {
	var $location = $(".location");
	var $temp = $(".temp");

	$location.html(item.name + ", " + item.sys.country);
	var fahr = Math.floor((item.main.temp * 9 / 5) - 459.67);
    var cels = Math.floor(item.main.temp - 273.15);

	$temp.html(fahr);

}

function showPosition(position) {
	var crd = position.coords;
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    getWeather(crd.latitude, crd.longitude);
    
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
}

getLocation();