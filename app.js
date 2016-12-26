const app = angular.module("root", [])
    .controller("RootCtrl", RootController);

function RootController($http) {
    const ctrl = this;

// controller SCALARS
    ctrl.carousel = [];

// controller FUNCTIONS

// grab endpoints from carousel_images.json
    function getCarousel() {
        let i = 0;
        $http.get("./carousel_images.json")
            .then( 
                (capture) => {
                    console.log(capture.data);
                }
            )
    }

// NAV functions
    function orderLink() {
        alert("yeah!");
    }

// ON-LOAD Functions
    getCarousel();

// defined FUNCTIONS 
    // ctrl._getAllFilesFromFolder = _getAllFilesFromFolder;
    ctrl.getCarousel = getCarousel;
    ctrl.orderLink = orderLink;
}