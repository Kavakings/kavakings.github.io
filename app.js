const app = angular.module("root", []).controller("RootCtrl", RootController);

function RootController() {
    const ctrl = this;

// controller SCALARS


// controller FUNCTIONS
// NAV functions
    function orderLink() {
        alert("yeah!");
    }

// JUMBOTRON functions
    function carousel() {
        
    }

// defined FUNCTIONS 
    ctrl.orderLink = orderLink;
    ctrl.carousel = carousel;
}