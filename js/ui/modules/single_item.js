/**
 * Created by Cubla on 09.04.2018.
 */
(function(_export) {
    var name = "js/ui/modules/single_item";
    var libs = [
        "js/libs/base"
    ];

    define(name, libs, function () {
        var Base = require("js/libs/base");

        var single_item = request.create("single_item", {
            constructor: function(_options){
                var base = {

                };
                tools.extend(base, _options);

                Base.prototype.constructor.call(this, base);

                this.__init();
            },
            __init: function () {

            },

        });

        return single_item;
    });
})(window);
