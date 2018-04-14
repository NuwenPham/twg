/**
 * Created by Cubla on 09.04.2018.
 */
(function(_export) {
    var name = "js/load_main_page_data";
    var libs = [
        "js/libs/base",
        "js/requests/product/list",
        "js/ui/modules/recommendation_block",
        "js/ui/modules/single_item",
    ];

    define(name, libs, function () {
        var Base = require("js/libs/base");
        var request_product_list = require("js/requests/product/list");
        var recommendation_block = require("js/ui/modules/recommendation_block");
        var single_item = require("js/ui/modules/single_item");

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
                var rpl = new request_product_list();
                rpl.send();
                rpl.on("success", this.__on_load_products.bind(this));
            },
            __on_load_products: function (_event) {
                console.log(_event.data);


                debugger;
                var rb = new recommendation_block();
                $("#module-recommendation-items").append(rb.wrapper);


                rb.add_item_block(new single_item());
                rb.add_item_block(new single_item());
                rb.add_item_block(new single_item());
                rb.add_item_block(new single_item());

                rb.add_item_block(new single_item());
                rb.add_item_block(new single_item());
                rb.add_item_block(new single_item());
                rb.add_item_block(new single_item());

            }

        });

        return load_main_page_data;
    });
})(window);
