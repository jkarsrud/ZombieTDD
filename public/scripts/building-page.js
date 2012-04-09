var hub = new Faye.Client("/faye");

ZOMBIE.blueprintController.create({
    blueprintRoot:document.getElementById('blueprints'),
    hub:hub
}).init();

ZOMBIE.buildingController.create({
    building:{
        zombies:50,
        barricade:100,
        rooms:[
            {name:'Trapdoor'}
        ],
        sleepers:4
    },
    buildingRoot:document.getElementById('building'),
    renderer:ZOMBIE.renderBuilding,
    hub:hub
}).init();