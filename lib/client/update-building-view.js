var ZOMBIE = this.ZOMBIE || {};

(function (Z) {
    Z.updateBuildingView = function (root, renderer, building) {
        root.innerHTML = renderer(building);
    };
}(ZOMBIE));