var banksymap = L.map('banksy-map').setView([40.749813, -74.046777], 9.25);

L.tileLayer('https://api.mapbox.com/styles/v1/angiedimichele/ck2wlhib80z401cmuku4bk3y4/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5naWVkaW1pY2hlbGUiLCJhIjoiY2syd2FvdjYwMGN1ZzNobzd1aTQ1Mzh6bCJ9.GF8jVdCk5V8El-N0nrAkQQ', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18
}).addTo(banksymap);

for (let i = 0; i < places.length; i++) {
  L.marker([places[i].lat, places[i].long])
  .bindPopup('<h3>'+ places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
  .addTo(banksymap);
}
