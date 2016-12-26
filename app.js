const app = angular.module("root", [])
    .controller("RootCtrl", RootController);

// TURNS OFF 'Possibly unhandled rejection ()'
// app.config(['$qProvider', function ($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);

function RootController($http) {
    const ctrl = this;

// controller SCALARS
    ctrl.image_path = [];
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
                        ctrl.image_path.push(capture.data[i]);
                    }
                console.log(ctrl.image_path);
                carouselGo();
                }
            )
    }

    function carouselGo() {
        // let path = "file:///home/billbunkum/git-repos/kavakings/_media/";
        let path = "./_media/";
        let i = 0;
        for (i = 0; i < ctrl.image_path.length; i++){
            ctrl.carousel.push(path + ctrl.image_path[i]);
            console.log(ctrl.carousel);
        }
        ctrl.full_carousel = ctrl.carousel;
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
    // ctrl.getPaths = getPaths;
    ctrl.carouselGo = carouselGo;
    ctrl.orderLink = orderLink;
}