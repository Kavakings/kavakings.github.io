const app = angular.module("root", [])
    .controller("RootCtrl", RootController);

function RootController($http) {
    const ctrl = this;

// controller SCALARS
    ctrl.carousel = [];

// controller FUNCTIONS

// grab endpoints from carousel_images.json
    function getCarouselImages() {
        let i = 0;
        $http.get("./carousel_images.json")
            .then( 
                (capture) => {
                    dict_len = Object.keys(capture.data).length;
                    for (i = 0; i < dict_len; i++){
                        ctrl.carousel.push(capture.data[i]);
                    }
                console.log(ctrl.carousel);
                carouselGo();
                }
            )
    }

    function carouselGo() {
        let path = "./_media/";
        let image_path = "";
        let i = 0;
        for (i = 0; i < ctrl.carousel.length; i++){
            image_path = path + ctrl.carousel[i];
            console.log(image_path);
        }
        setTimeout(carouselGo, 5000);
    }

// NAV functions
    function orderLink() {
        alert("yeah!");
    }

// ON-LOAD Functions
    getCarouselImages();

// defined FUNCTIONS 
    // ctrl._getAllFilesFromFolder = _getAllFilesFromFolder;
    ctrl.getCarouselImages = getCarouselImages;
    ctrl.carouselGo = carouselGo;
    ctrl.orderLink = orderLink;
}