var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var reviewForm = document.querySelector(".review__form");
var popapSuccess = document.querySelector(".popap-success");
var popapFailure = document.querySelector(".popap-failure");
var close = popapSuccess.querySelector(".modal__close");
var userName = popupFeedback.querySelector("[id=contacts-name]");
var userFamily = popupFeedback.querySelector("[id=contacts-family]");
var userEmail = popupFeedback.querySelector("[id=contacts-email]");
var userTel = popupFeedback.querySelector("[id=contacts-tel]");

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

reviewForm.addEventListener("submit", function(evt) {
  if (!userName.value || !userFamily.value || !userEmail.value || !userTel.value) {
    evt.preventDefault();
  popapFailure.classList.add("modal--show");
  //   // popupFeedback.classList.remove("modal-error");
  //   // popupFeedback.offsetWidth = popupFeedback.offsetWidth;
  //   // popupFeedback.classList.add("modal-error");
  //   if (!userName.value) {
  //     userName.focus();
  //   } else if (!userEmail.value) {
  //     userEmail.focus();
  //   } else if (!userTel.value) {
  //     userTel.focus();
  //   }
  }
  else {
    popapSuccess.classList.add("modal--show");
  }
});

//карта google
function initMap() {
var coordinates = {lat: 34.870792, lng: -111.765570},
    markerImage = '../img/icon-map-marker.svg',
    zoom = 7 ,
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
