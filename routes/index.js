/*
 * GET home page.
 */

var renderBuilding = require('../lib/shared/building_renderer');

exports.index = function (req, res) {
    res.render('index', {
        title:'ZombieTDD',
        buildingHTML:renderBuilding({
            zombies: 50,
            barricade: 100,
            rooms: [
                {name: 'Trapdoor'}
            ],
            sleepers: 4
        })
    });
};