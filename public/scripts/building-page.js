ZOMBIE.pageInitialized = (function (Z) {
    var hub = new Faye.Client("http://localhost:3000/faye");

    Z.blueprintController.create({
        blueprintRoot:document.getElementById("blueprints"),
        hub:hub
    }).init();

    var building = Z.building.create({
        zombies:50,
        barricade:98,
        rooms:[
            { name:"Trapdoor" }
        ],
        sleepers:4
    });

    Z.currentBuilding = building;

    var controller = Z.buildingController.create({
        building:building,
        hub:hub
    });

    controller.on("change", function (building) {
        var root = document.getElementById("building");
        Z.updateBuildingView(root, Z.renderBuilding, building);
    });

    return controller.init();

}(ZOMBIE));