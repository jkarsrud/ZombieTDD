(function (shape) {
    buster.testCase("Shape", {
        "should be an object":function () {
            assert.isObject(shape);
        },
        "should create shapes":function () {
            assert.isPrototype(shape, shape.create(["*"]));
        },
        "should return array representation":function () {
            var s = shape.create(["***"]);
            assert.equals(s.toArray(), ["***"]);
        },
        "changing toArray-result should not affect shape": function() {
            var s = shape.create(["***"]);
            s.toArray()[0] = "* *";
            assert.equals(s.toArray(), ["***"]);
        },
        "should complain about missing rows":function () {
            assertTypeError(function () {
                shape.create();
            });
        },
        "should complain about uneven shape":function () {
            assertTypeError(function () {
                shape.create(["***", "*"]);
            });
        },
        "should complain about empty shape":function () {
            assertTypeError(function () {
                shape.create([]);
            });

            assertTypeError(function () {
                shape.create([""]);
            });
        },
        "should extract columns":function () {
            var s = shape.create(["ab", "cd"]);
            assert.equals(s.getColumn(0), ["a", "c"]);
            assert.equals(s.getColumn(1), ["b", "d"]);
        },
        "should get width of shape":function () {
            var s = ["***", "*  "];
            assert.equals(shape.create(s).getWidth(), 3);
        }
    });

    function assertRotation(before, after) {
        var s = shape.create(before);
        var newShape = s.rotate();
        assert.equals(newShape.toArray(), after);
    }

    buster.testCase("Shape.rotate", {
        "should rotate exceedingly simple shape":function () {
            assertRotation(["*"], ["*"]);
        },
        "should rotate vertical line":function () {
            assertRotation(["*", "*"], ["**"]);
        },
        "should rotate horizontal line":function () {
            assertRotation(["**"], ["*", "*"]);
        },
        "should rotate rectangles":function () {
            assertRotation(["***", "***"], ["**", "**", "**"]);
        },
        "should rotate tetris-like shapes":function () {
            var before = ["***", "*  "],
                after = ["**", " *", " *"];
            assertRotation(before, after);
        },
        "should rotate counter clock wise":function () {
            var before = ["**", " *"],
                after = ["**", "* "],
                s = shape.create(before),
                newShape = s.rotateCCW();

            assert.equals(newShape.toArray(), after);
        },
        "should rotate door frames":function () {
            assertRotation(["**<"], ["*", "*", "^"]);
            assertRotation(["*", "*", "^"], [">**"]);
            assertRotation([">**"], ["v", "*", "*"]);
            assertRotation(["v", "*", "*"], ["**<"]);
        }
    });
}(ZOMBIE.shape));