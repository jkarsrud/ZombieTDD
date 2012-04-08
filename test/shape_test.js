(function (shape) {
    buster.testCase("Blueprint", {
        "should be an object":function () {
            assert.isObject(shape);
        },
        "should create shapes":function () {
            var s = shape.create(["*"]);
            assert.isPrototype(shape, s);
        },
        "should have shape":function () {
            var s = shape.create(["***", "***"]);
            assert.equals(["***", "***"], s.toArray());
        },
        "should complain about missing shape":function () {
            assert.exception(function () {
                shape.create();
            });
        },
        "should complain about uneven shape": function() {
            assert.exception(function() {
                shape.create(["***", "*"]);
            }, "TypeError");
        },
        "should complain about empty shape": function() {
            assert.exception(function() {
                shape.create([]);
            });

            assert.exception(function() {
                shape.create([""]);
            });
        },
        "should extract columns": function() {
            var s = shape.create(["ab", "cd"]);
            assert.equals(["a", "c"], s.getColumn(0));
            assert.equals(["b", "d"], s.getColumn(1));
        },
        "should get width of shape": function() {
            var s = ["***", "***"];
            assert.equals(3, shape.create(s).getWidth());
        }
    });

    function assertRotation(before, after) {
        var s = shape.create(before);
        var newShape = s.rotate();
        assert.equals(after, newShape.toArray());
    }

    buster.testCase("Blueprint.rotate", {
        "should rotate exceedingly simple shape":function () {
            assertRotation(["*"], ["*"]);
        },
        "should rotate vertical line":function () {
            assertRotation(["*", "*"], ["**"]);
        },
        "should rotate horizontal line":function () {
            assertRotation(["**"], ["*","*"]);
        }
    });
}(ZOMBIE.shape));