var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

//карта google
function initMap() {
var coordinates = {lat: 34.870792, lng: -111.765570},
    markerImage = '../img/icon-map-marker.svg',
    zoom = 8 ,
    map = new google.maps.Map(document.getElementById('map'), {
        center: coordinates,
        zoom: zoom,
        disableDefaultUI: true
    }),
    marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: markerImage
    });
}
initMap();
