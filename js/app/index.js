(function(){
document.addEventListener('deviceready',onDeviceReady.bind(this),false);
var pictureSource;
var destinationType;

function onDeviceReady(){
pictureSource = navigator.camera.PictureSourceType;
destinationType = navigator.camera.DestinationType;

document.getElementById("capturePhoto").onclick=function() {
navigator.camera.getPicture(onPhotoDataSuccess, onFail,{

  quality: 50,
  destinationType : destinationType.DATA_URL
});



}

};

function onPhotoDataSuccess(imageData){

var smallImage = document.getElementById('smallImage');
smallImage.style.display = 'block';
smallImage.src = "data:image/jpeg;base64," + imageData;


}

function Scanner(){
 cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },

   );





})();
