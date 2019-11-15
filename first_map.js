
var mymap = L.map('map-id').setView([35.848784, -106.265939], 7.58);

  L.tileLayer('https://api.mapbox.com/styles/v1/angiedimichele/ck2war9tq1hx61co6e832o3kg/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5naWVkaW1pY2hlbGUiLCJhIjoiY2syd2FvdjYwMGN1ZzNobzd1aTQ1Mzh6bCJ9.GF8jVdCk5V8El-N0nrAkQQ', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18
}).addTo(mymap);

var marker1 = L.marker([35.654643, -105.996495]).addTo(mymap);

marker1.bindPopup('I went to Meow Wolf, an interactive art installation with a mysterious story behind it.');

var marker2 = L.marker([35.768636, -106.692258]).addTo(mymap);

marker2.bindPopup('I went to the Kasha-Katuwe Tent Rocks National Monument and hiked through canyons to the peak of the rocks.');

var marker3 = L.marker([35.689569, -105.947270]).addTo(mymap);

marker3.bindPopup('I drank and played pool at CrowBar, a little hole-in-the-wall bar.');

var marker4 = L.marker([35.648086, -106.337527]).addTo(mymap);

marker4.bindPopup('I went swimming in Cochiti Lake. It was surrounded by rocky, mountainous terrain and the water was cold.');
