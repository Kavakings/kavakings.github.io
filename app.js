const app = angular.module("root", [])
    .controller("RootCtrl", RootController);

// const app_dev = angular.module("root", [])
//     .controller("RootCtrl", RootController);

// TURNS OFF 'Possibly unhandled rejection ()'
// app.config(['$qProvider', function ($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);

function RootController($http) {
    const ctrl = this;

// controller SCALARS
    ctrl.image_path = [];
    ctrl.carousel = [];

// NG-SHOW sections
    ctrl.aboutUs = false;
    ctrl.whatIs = false;
    ctrl.contact = false;

    ctrl.products = false;
    ctrl.vibePowderDetails = false;
    ctrl.varsity = false;
    ctrl.fiji = false;

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
                carouselGo();
                }
            )
    }

    function carouselGo() {
        // let path = "file:///home/billbunkum/git-repos/kavakings/_media/";
        // let path = "./_media/";
        let path = "/";
        let i = 0;
        for (i = 0; i < ctrl.image_path.length; i++){
            ctrl.carousel.push(path + ctrl.image_path[i]);
        }
        console.log(ctrl.carousel);
        // ctrl.full_carousel = ctrl.carousel;
    }

// NG-SHOW NAV functions
    function showOrderLink() {
        turnOffContent();
        ctrl.contact = true;
    }
    function showAboutUs() {
        turnOffContent();
        ctrl.aboutUs = true;
    }
    function showWhatIsKava() {
        turnOffContent();
        ctrl.whatIs = true;
    }
    function showProducts() {
        turnOffContent();
        ctrl.products = true;
    }

    function turnOffContent() {
        ctrl.contact = false;
        ctrl.aboutUs = false;
        ctrl.whatIs = false;
        ctrl.products = false;
        ctrl.vibePowderDetails = false;
        ctrl.varsity = false;
        ctrl.fiji = false;
    }

// ON-LOAD Functions
    getCarouselImages();
    showAboutUs();

// defined FUNCTIONS 
    // ctrl._getAllFilesFromFolder = _getAllFilesFromFolder;
    ctrl.getCarouselImages = getCarouselImages;
    // ctrl.getPaths = getPaths;
    ctrl.carouselGo = carouselGo;

// NAV functions
    ctrl.showOrderLink = showOrderLink;
    ctrl.showAboutUs = showAboutUs;
    ctrl.showWhatIsKava = showWhatIsKava;
    ctrl.showProducts = showProducts;
    ctrl.turnOffContent = turnOffContent;
}