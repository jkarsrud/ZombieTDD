var ZOMBIE = this.ZOMBIE || {};

(function ($, ZOMBIE) {
    function renderOutside(zombies) {
        return '<li class="outside">Outside (' + zombies + ' zombies)' + '</li>';
    }

    function renderBarricade(barricade) {
        return '<li class="barricade">Barricade: ' + barricade + '% integrity' + '</li>';
    }

    function renderBedroom(sleepers) {
        return '<li class="bed room">Some beds (' + sleepers + ' guards)' + '</li>';
    }

    function renderRoom(rooms) {
        if (!rooms) return "";
        return '<li class="room">' + rooms[0].name +
            (rooms[0].guards ? " (" + rooms[0].guards + " guard)" : "") + '</li>';
    }

    function renderRooms(roomModel) {
        return '<ul class="rooms">' +
            renderOutside(roomModel.zombies) +
            renderBarricade(roomModel.barricade) +
            renderRoom(roomModel.rooms) +
            renderBedroom(roomModel.sleepers) +
            '</ul>';
    }

    $.extend(ZOMBIE, {
        renderRooms:renderRooms
    });
}(jQuery, ZOMBIE));