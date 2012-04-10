var hub = new Faye.Client("/faye");

ZOMBIE.blueprintController.create({
    blueprintRoot: document.getElementById('blueprints'),
    hub: hub
}).init();

var building = ZOMBIE.building.create({
    zombies: 50,
    barricade: 100,
    rooms: [
        {name: 'Trapdoor'}
    ],
    sleepers: 4
});

ZOMBIE.buildingController.create({
    building: building,
    hub: hub
}).init();