
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
	var $degree = $(".degree");
	var $cloud = $(".cloud");
	var $weatherImg = $(".weatherImg");
	$location.html(item.name + ", " + item.sys.country);
	var fahr = ((item.main.temp * 9 / 5) - 459.67).toFixed(0);
    var cels = (item.main.temp - 273.15).toFixed(0);
    var urlImg = "http://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
	$temp.html(fahr + "&deg");

	$cloud.html(item.weather[0].description);
	$weatherImg.attr("src", urlImg);

	$degree.click(function(e) {
		e.preventDefault();
		console.log(e.target.value);
		if(e.target.value == "F") {
			e.target.value = "C";
			$temp.html(cels + "&deg");			
		} else {
			e.target.value = "F";
			$temp.html(fahr + "&deg");		
		}
	});


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