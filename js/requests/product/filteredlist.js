/**
 * Created by Cubla on 08.04.2018.
 */
(function(_export) {
    var name = "js/requests/product/filteredlist";
    var libs = [
        "js/requests/request"
    ];

    define(name, libs, function () {
        var request = require("js/requests/request");

        var filteredlist = request.create("filteredlist", {
            constructor: function(_options){
                var base = {
                    host: "http://api.twiger.mcdir.ru",
                    method: "GET",
                    url: "product/filteredlist",
                    count: 8,
                    page: 0
                };
                tools.extend(base, _options);

                request.prototype.constructor.call(this, base);

                this.__url = this.__url + "/count/" + base.count + "/page/" + base.page;
            }
        });

        return filteredlist;
    });
})(window);
