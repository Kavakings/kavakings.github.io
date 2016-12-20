import *.jpg from "./_media";

const app = angular.module("root", []).controller("RootCtrl", RootController);

function RootController($http) {
    const ctrl = this;

// controller SCALARS
    ctrl.carousel = [];


// controller FUNCTIONS

// function to put file names from _media into ctrl.carousel
    function getCarousel() {

    }

// NAV functions
    function orderLink() {
        alert("yeah!");
    }

// JUMBOTRON functions
// file structure for kavakings.com/cpanel is as follows: //kavakings.com/imageSlideShow/
    function getImageUrls() {
        image_urls = [];
        image_urls = $http.get("http://kavakings.com/imageSlideShow/")
            .then(
                console.log(image_urls)
            );
    }

    function carousel() {
        getImageUrls();
    }

// defined FUNCTIONS 
    ctrl.getCarousel = getCarousel;
    ctrl.orderLink = orderLink;
    ctrl.getImageUrls = getImageUrls;
    ctrl.carousel = carousel;
}