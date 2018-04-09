/**
 * Created by Cubla on 08.04.2018.
 */
(function(_export) {
    var name = "js/requests/product/list";
    var libs = [
        "js/requests/request"
    ];

    define(name, libs, function () {
        var request = require("js/requests/request");

        var product_list = request.create("product_list", {
            constructor: function(_options){
                var base = {
                    host: "http://api.twiger.mcdir.ru",
                    method: "GET",
                    url: "product/list"
                };
                tools.extend(base, _options);

                request.prototype.constructor.call(this, base);
            }
        });

        return product_list;
    });
})(window);
