if (typeof require === 'function' && typeof module !== 'undefined') {
    buster = require('buster');
    ZOMBIE = {buildingController:require('../../lib/client/building-controller') };
}

(function (Z) {
    buster.testCase("BuildingController", {
        "//should notify listeners when building changes":function () {

        },
        "should delegate events to building":function () {
            var building = { buildRoom:this.stub()};
            var hub = { subscribe:this.stub() };

            var controller = Z.buildingController.create({
                building:building,
                hub: hub
            });

            hub.subscribe.yields({name:"Flamethrower Surprise"});
            controller.init();

           assert.calledOnceWith(building.buildRoom, "Flamethrower Surprise");
        },
        "should render building on '/buildRoom' event":function () {
            var hub = { subscribe:this.stub() };
            var buildingRoot = document.createElement('div');
            var updateView = Z.updateBuildingView.bind(null,
                                                        buildingRoot,
                                                        Z.renderBuilding);

            var controller = Z.buildingController.create({
                building:Z.building.create({}),
                hub:hub
            });

            controller.on('change', updateView);

            hub.subscribe.yields({name:"Flamethrower Surprise"});
            controller.init();

            assert.match(buildingRoot.innerHTML, "Flamethrower Surprise");
        }
    });
}(ZOMBIE));