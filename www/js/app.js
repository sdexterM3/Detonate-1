// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
.controller("ExampleController", function ($scope, $cordovaContacts) {

    $scope.getContactList = function () {
        var fields = ["displayName", "name", "nickname", "emails", "phoneNumbers"];
        $cordovaContacts.find({ filter: "", multiple: true, hasPhoneNumber: true }).then(function (result) {
            $scope.contacts = result;
        }, function (error) {
            console.log("ERROR: " + error);
        });
    }

    $scope.createContact = function () {
        $cordovaContacts.save({ "displayName": "Steve Jobs" }).then(function (result) {
            console.log('Steve is added');
        }, function (error) {
            console.log(error);
        });
    }

    $scope.removeContact = function () {
        $cordovaContacts.remove({ "displayName": "Steve Jobs" }).then(function (result) {
            console.log(JSON.stringify(result));
        }, function (error) {
            console.log(error);
        });
    }
});

