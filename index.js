
function getWeather() {
	var link = "http://api.openweathermap.org/data/2.5/weather?lat=39&lon=-78&appid=06170c100199dbae1e223cc3dfad960b";

	$.getJSON(link, function(data) {
		console.log(data);
		generateWeather(data);
	})
}

getWeather();

var generateWeather = function(item) {
	var $location = $(".location");

	$location.html(item.name + ", " + item.sys.country);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
}
function showPosition(position) {
	var crd = position.coords;
    console.log(`Latitude : ${Math.floor(crd.latitude)}`);
    console.log(`Longitude: ${Math.floor(crd.longitude)}`);
    return `lat=${Math.floor(crd.latitude)}&lon=${Math.floor(crd.longitude)}`;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};