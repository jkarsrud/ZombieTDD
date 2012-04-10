if (typeof require === 'function' && typeof module !== 'undefined') {
    buster = require('buster');
    ZOMBIE = {buildingController:require('../../lib/client/building-controller') };
}

(function (Z) {
    buster.testCase("BuildingController", {
        setUp: function() {
            this.building = { buildRoom:this.stub()};
            this.hub = { subscribe:this.stub() };
            this.controller = Z.buildingController.create({
                building:this.building,
                hub: this.hub
            });
        },
        "should notify listeners when building changes":function () {
            var listener = this.stub();
            this.controller.on('change', listener);

            this.hub.subscribe.yields({name:"Flamethrower Surprise"});
            this.controller.init();

            assert.calledOnceWith(listener, this.building);
        },
        "should delegate events to building":function () {
            this.hub.subscribe.yields({name:"Flamethrower Surprise"});
            this.controller.init();

           assert.calledOnceWith(this.building.buildRoom, "Flamethrower Surprise");
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