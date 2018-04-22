/**
 * Created by Cubla on 08.04.2018.
 */
(function(_export) {
    var name = "js/requests/content/primary_ad_unit";
    var libs = [
        "js/requests/request"
    ];

    define(name, libs, function () {
        var request = require("js/requests/request");

        var primary_ad_unit = request.create("primary_ad_unit", {
            constructor: function(_options){
                var base = {
                    host: "http://api.twiger.mcdir.ru",
                    method: "GET",
                    url: "content/primary_ad_unit"
                };
                tools.extend(base, _options);

                request.prototype.constructor.call(this, base);
            }
        });

        return primary_ad_unit;
    });
})(window);
