var ZOMBIE = this.ZOMBIE || {};

if (typeof require === 'function' && typeof module !== 'undefined') {
    EventEmitter = require('events').EventEmitter;
}

(function (Z) {
    "use strict";

    console.log(window.EventEmitter);
    var init = function () {
        var self = this;
        this.hub.subscribe("/buildRoom", function (message) {
            self.building.buildRoom(message.name);
            self.emit('change', self.building);
        });
    };

    var create = function (params) {
        return Object.create(this, {
            building:{value:params.building},
            hub:{value:params.hub}
        });
    };

    Z.buildingController = Object.create(new EventEmitter, {
        create: {value: create},
        init: {value: init}
    });

    Z.updateBuildingView = function (root, renderer, building) {
        root.innerHTML = renderer(building);
    };

}(ZOMBIE));

if (typeof require === 'function' && typeof module !== 'undefined') {
    module.exports = ZOMBIE.buildingController;
}