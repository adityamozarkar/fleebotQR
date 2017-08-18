// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .controller('BarcodeCtrl', function ($scope, $http) {

   
    //$scope.qrurl = "http://localhost:97/qr/pdi_incharge/checkbarcode.php?barcode=";
    $scope.qrurl = "http://www.chw.vardhmanautomobile.com/pdi2/checkbarcode.php?barcode=";
    $scope.scan = function () {
      cordova.plugins.barcodeScanner.scan(function (d) {
        console.log(d)
        if (d) {
          $scope.qrcodedata = d.text;
           $scope.qrurl += d.text;
        window.open($scope.qrurl, "_blank");
          $scope.$apply();
        }
      }, function (f) { console.log(f) }, function (f) { console.log(f) })
    };
  
  });


