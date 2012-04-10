var ZOMBIE = this.ZOMBIE || {};

(function (Z) {
    "use strict";

    Z.blueprintController = {
        create:function (params) {
            return Object.create(this, {
                blueprintRoot:{value:params.blueprintRoot},
                hub:{value:params.hub}
            });
        },
        init:function () {
            var self = this;
            $(this.blueprintRoot).on('click', '.buildRoom', function () {
                self.hub.publish("/buildRoom", {name:$(this).data('type')});
            });
        }
    }
}(ZOMBIE));