const app = angular.module("root", [])
    .controller("RootCtrl", RootController);

// const app_dev = angular.module("root", [])
//     .controller("RootCtrl", RootController);

// TURNS OFF 'Possibly unhandled rejection ()'
// app.config(['$qProvider', function ($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);

function RootController($http, $location) {
    const ctrl = this;
    // $.material.init();

// controller SCALARS
    ctrl.image_path = [];
    ctrl.carousel = [];

// toggle ORDER button 
    ctrl.orderButton = false;

// NG-SHOW sections
    ctrl.aboutUs = false;
    ctrl.whatIs = false;
    ctrl.contact = false;

    ctrl.products = false;
    ctrl.rootPowderDetails = false;
    ctrl.vibeInstantDetails = false;
    ctrl.vibeInstantMore = false;
    ctrl.varsity = false; //houses block of text
    ctrl.fiji = false; //houses block of text

    ctrl.vibeInstantPrices = false;
    ctrl.varsityRootPrices = false;
    ctrl.fijiRootPrices = false;

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
        let path = "https:kavakings.github.io/_media/";
        let i = 0;
        for (i = 0; i < ctrl.image_path.length; i++){
            ctrl.carousel.push(path + ctrl.image_path[i]);
        }
        console.log(ctrl.carousel);
        // ctrl.full_carousel = ctrl.carousel;
    }

// Toggles true/false orderButton to change NAV links
    function orderButtonToggle() {
        turnOffContent().then(
                ctrl.orderButton = true
            );  
        alert(ctrl.orderButton);
        // ternary does NOT work because of page RELOAD
        // ctrl.orderButton == true ? false : true;
    }

// used to turn on proper ng-show once back from Contact page
    function backFromContactPage() {
        let absUrl = $location.absUrl();
        console.log(absUrl);
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
        backFromContactPage();
        turnOffContent();
        ctrl.whatIs = true;
    }
    function showProducts() {
        turnOffContent();
        ctrl.products = true;
        ctrl.rootPowderDetails = true;
        ctrl.vibeInstantDetails = true;
    }

    function showVibeInstantOnly() {
        turnOffContent();
        ctrl.products = true;
        ctrl.vibeInstantDetails = true;
        ctrl.vibeInstantMore = true;
    }

    function showVarsityRootOnly() {
        turnOffContent();
        ctrl.products = true;
        ctrl.varsity = true;
        // ctrl.varsityRootPrices = true;
    }

    function showFijiFloOnly() {
        turnOffContent();
        ctrl.products = true;
        ctrl.fiji = true;
        // ctrl.fijiRootPrices = true;
    }

    function turnOffContent() {
        ctrl.orderButton = false;

        ctrl.contact = false;
        ctrl.aboutUs = false;
        ctrl.whatIs = false;
        ctrl.products = false;
        ctrl.rootPowderDetails = false;
        ctrl.vibeInstantDetails = false;
        ctrl.vibeInstantMore = false;
        ctrl.varsity = false;
        ctrl.fiji = false;
        ctrl.vibeInstantPrices = false;
        ctrl.varsityRootPrices = false;
        ctrl.fijiRootPrices = false;
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
    ctrl.backFromContactPage = backFromContactPage;

    ctrl.orderButtonToggle = orderButtonToggle;
    ctrl.showOrderLink = showOrderLink;
    ctrl.showAboutUs = showAboutUs;
    ctrl.showWhatIsKava = showWhatIsKava;
    ctrl.showProducts = showProducts;
    ctrl.showVibeInstantOnly = showVibeInstantOnly;
    ctrl.showVarsityRootOnly = showVarsityRootOnly;
    ctrl.showFijiFloOnly = showFijiFloOnly;
    ctrl.turnOffContent = turnOffContent;
}