(function() {

document.addEventListener('deviceready', onDeviceReady.bind(this), false);
var pictureSource;
var destinationType;
function onDeviceReady() {
pictureSource = navigator.camera.PictureSourceType;
destinationType = navigator.camera.DestinationType;

document.getElementById("capturePhoto").onclick = function() {
navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
quality : 50,

destinationType : destinationType.DATA_URL
});
}

document.getElementById("geolocationdata").addEventListener("click", function() {
navigator.geolocation.getCurrentPosition(onSuccess, onError, {
enableHighAccuracy : true
});
});

//watchPosition
var watchId = navigator.geolocation.watchPosition(onWatchSuccess, onWatchError, {
timeout : 30000
});

document.getElementById("clearWatchbtn").addEventListener("click", function() {
navigator.geolocation.clearWatch(watchID);
});

document.getElementById('barcode').onclick=function(){
cordova.plugins.barcodeScanner.scan(onBarcodeSuccess,onBarcodeFail
,


{
         "preferFrontCamera" : true, // iOS and Android
         "showFlipCameraButton" : true, // iOS and Android
         "prompt" : "Place a barcode inside the scan area", // supported on Android only
         "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
         "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device

});
}

// var mapCanvas = document.getElementById("map");
  //
var mapOptions = {
//    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
//  };
//  var map = new google.maps.Map(mapCanvas, mapOptions);

};


function onMapInit(map) {
}

function onPhotoDataSuccess(imageData) {

var smallImage = document.getElementById('smallImage');

smallImage.style.display = 'block';

smallImage.src = "data:image/jpeg;base64," + imageData;

}

function onFail(message) {

alert('Failed because: ' + message);

}

///////////geolocation bit/////////////////
var onSuccess = function(position) {
alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude + '\n');
};

// onError Callback receives a PositionError object
//
function onError(error) {
alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

//watchPosition

var onWatchSuccess = function(position) {
var element = document.getElementById('divWatchMeMove');
element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' + 'Longitude: ' + position.coords.longitude + '<br />' + '<hr />' + element.innerHTML;
};

function onWatchError(error) {
alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

function onBarcodeSuccess(result) {
         alert("We got a barcode\n" +
               "Result: " + result.text + "\n" +
               "Format: " + result.format + "\n" +
               "Cancelled: " + result.cancelled);
}

function onBarcodeFail(error) {
         alert("Scanning failed: " + error);

}

})();
