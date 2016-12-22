import readDir from "./_media/";

const app = angular.module("root", []).controller("RootCtrl", RootController);

function RootController($http) {
    const ctrl = this;

// controller SCALARS
    ctrl.carousel = [];

// controller FUNCTIONS

    // idea from STACKOVERFLOW
    // function _getAllFilesFromFolder(dir) {
    //     let filesystem = require("fs");
    //     let results = [];
    //     filesystem.readdirSync(dir).forEach(function(file) {
    //         file = dir+'/'+file;
    //         let stat = filesystem.statSync(file);
    //         if (stat && stat.isDirectory()) {
    //             results = results.concat(_getAllFilesFromFolder(file))
    //         } else results.push(file);
    //     });
    //     return results;
    // };

// function to put file names from _media into ctrl.carousel
    //
    // might try HARD-CODING in root dir to see if works
    //
    function getCarousel() {
    }

// NAV functions
    function orderLink() {
        alert("yeah!");
    }

// JUMBOTRON functions
// file structure for kavakings.com/cpanel is as follows: //kavakings.com/imageSlideShow/
    // function getImageUrls() {
    //     image_urls = [];
    // }

// ON-LOAD Functions
    // getCarousel();

// defined FUNCTIONS 
    // ctrl._getAllFilesFromFolder = _getAllFilesFromFolder;
    ctrl.getCarousel = getCarousel;
    ctrl.orderLink = orderLink;
}