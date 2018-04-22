/**
 * Created by Cubla on 09.04.2018.
 */
(function(_export) {
    var name = "js/load_main_page_data";
    var libs = [
        "js/libs/base",
        "js/requests/product/list",
        "js/requests/product/filteredlist",
        "js/ui/modules/recommendation_block",
        "js/ui/modules/ad_block",
        "js/ui/modules/most_views",
    ];

    define(name, libs, function () {
        var Base = require("js/libs/base");
        var request_product_list = require("js/requests/product/list");
        var request_filteredlist = require("js/requests/product/filteredlist");
        var recommendation_block = require("js/ui/modules/recommendation_block");
        var ad_block = require("js/ui/modules/ad_block");
        var most_views = require("js/ui/modules/most_views");

        var load_main_page_data = Base.create("load_main_page_data", {
            constructor: function(_options){
                var base = {

                };
                tools.extend(base, _options);

                Base.prototype.constructor.call(this, base);

                this.__init();
            },
            __init: function () {
                //debugger;

                var rb = new recommendation_block();
                $(rb.anchor()).append(rb.wrapper);

                var mv = new most_views();
                $(mv.anchor()).append(mv.wrapper);

                var ab = new ad_block();
                $(ab.anchor()).append(ab.wrapper);
            },

            __on_load_products: function (_event) {
                console.log(_event.data);
            }
        });

        return load_main_page_data;
    });
})(window);
