var ZOMBIE = this.ZOMBIE || {};

(function (Z) {
    "use strict";

    function isEmptyShape(rows) {
        return !rows || !rows.length || !rows[0].length;
    }

    function validateNonEmptyShape(rows) {
        if (isEmptyShape(rows)) {
            throw new TypeError("shape must be array with at least one non-empty string");
        }
    }

    function validateEvenShape(rows) {
        var i, l;
        for (i = 1, l = rows.length; i < l; i += 1) {
            if (rows[i].length != rows[i - 1].length) {
                throw new TypeError("No uneven shapes");
            }
        }
    }

    function validateShape(rows) {
        validateNonEmptyShape(rows);
        validateEvenShape(rows);
    }

    function create(rows) {
        validateShape(rows);
        return Object.create(this, {
            rows:{ value:rows}
        });
    }

    function getColumn(index) {
        var column = [],
            i,
            length = this.rows.length;

        for (i = 0; i < length; i += 1) {
            column.push(this.rows[i].charAt(index));
        }
        return column;
    }

    function getColumns() {
        var rows = [], i, l;
        for (i = 0, l = this.getWidth(); i < l; i++) {
            rows.push(this.getColumn(i));
        }
        return rows;
    }

    function getWidth() {
        return this.rows[0].length;
    }

    var blockRotations = {
        "<":"^",
        "^":">",
        ">":"v",
        "v":"<"
    };

    function rotateBlock(block) {
        return blockRotations[block] || block;
    }

    function rotateColumn(column) {
        return column.map(rotateBlock).reverse().join("");
    }

    function rotate() {
        var rows = this.getColumns().map(rotateColumn);
        return ZOMBIE.shape.create(rows);
    }

    function rotateCCW() {
        return this.rotate().rotate().rotate();
    }

    function toArray() {
        return this.rows.slice(0);
    }

    ZOMBIE.shape = {
        create:create,
        getColumn:getColumn,
        getColumns:getColumns,
        getWidth:getWidth,
        rotate:rotate,
        rotateCCW:rotateCCW,
        toArray:toArray
    };

}(ZOMBIE));

if (typeof require === 'function' && typeof module !== 'undefined') {
    module.exports = ZOMBIE.shape;
}