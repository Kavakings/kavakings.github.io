// import seheyuan.jpg from "./_media/";

const app = angular.module("root", []).controller("RootCtrl", RootController);

function RootController($http) {
    const ctrl = this;

// controller SCALARS
    ctrl.carousel = [];


// controller FUNCTIONS

// function to put file names from _media into ctrl.carousel
    //
    // might try HARD-CODING in root dir to see if works
    //
    function getCarousel() {
        $http.get("./_media/seheyuan.jpg")
            .then( (data) => {
                ctrl.carousel.push(data);
                }
            );
        console.log(ctrl.carousel);
    }

// NAV functions
    function orderLink() {
        alert("yeah!");
    }

// JUMBOTRON functions
// file structure for kavakings.com/cpanel is as follows: //kavakings.com/imageSlideShow/
    function getImageUrls() {
        image_urls = [];
    }

    function carousel() {
        getImageUrls();
    }

// ON-LOAD Functions
    getCarousel();

// defined FUNCTIONS 
    ctrl.getCarousel = getCarousel;
    ctrl.orderLink = orderLink;
    ctrl.getImageUrls = getImageUrls;
    ctrl.carousel = carousel;
}