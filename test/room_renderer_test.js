(function (Z) {
    function findSingleElement(html, selector) {
        var elements = $(html).find(selector);
        assert.equals(elements.length, 1, "jQuery found no elements: " + selector + " in: \n" + html);
        return elements;
    }

    buster.testCase("RoomRenderer", {
        "should render barricade":function () {
            var html = Z.renderRooms({ barricade:43 }),
                text = findSingleElement(html, '.barricade').text();
            assert.equals(text, "Barricade: 43% integrity");
        },
        "should render barricade value":function () {
            var html = Z.renderRooms({ barricade:13 }),
                text = findSingleElement(html, '.barricade').text();
            assert.equals(text, "Barricade: 13% integrity");
        },
        "should render bedroom":function () {
            var html = Z.renderRooms({sleepers:3}),
                text = findSingleElement(html, '.bed.room').text();
            assert.equals(text, "Some beds (3 guards)");
        },
        "should render outside":function () {
            var html = Z.renderRooms({zombies:30}),
                text = findSingleElement(html, '.outside').text();
            assert.equals(text, "Outside (30 zombies)");
        },
        "should render room without guards":function () {
            var html = Z.renderRooms({ rooms:[
                    { name:'Trapdoor' }
                ] }),
                text = findSingleElement(html, '.room:first').text();
            assert.equals(text, 'Trapdoor');
        },
        "should render room with guards":function () {
            var html = Z.renderRooms({ rooms:[
                    {
                        name:'Hiding spot',
                        guards:1
                    }
                ] }),
                text = findSingleElement(html, '.room:first').text();
            assert.equals(text, 'Hiding spot (1 guard)');
        }
    });
}(ZOMBIE));