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
        "js/ui/modules/single_item",
    ];

    define(name, libs, function () {
        var Base = require("js/libs/base");
        var request_product_list = require("js/requests/product/list");
        var request_filteredlist = require("js/requests/product/filteredlist");
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
                var rpl = new request_filteredlist();
                rpl.send();
                rpl.on("success", this.__on_load_products.bind(this));
            },
            __on_load_products: function (_event) {
                console.log(_event.data);


                debugger;
                var rb = new recommendation_block();
                $("#module-recommendation-items").append(rb.wrapper);


                var a = 0;
                while(a < _event.data.Data.length){
                    var block_data = _event.data.Data[a];
                    rb.add_item_block(new single_item({
                        item_image: "http://api.twiger.mcdir.ru" + block_data.pictures.mainImg,
                        title_text: block_data.name,
                        price: block_data.price,
                        currency: "₽",
                        rating: block_data.rating,
                        comments_count: block_data.views,
                        likes_count: 0,
                    }));
                    a++;
                }


                //rb.add_item_block(new single_item());
                //rb.add_item_block(new single_item());
                //rb.add_item_block(new single_item());
                //rb.add_item_block(new single_item());
                //
                //rb.add_item_block(new single_item());
                //rb.add_item_block(new single_item());
                //rb.add_item_block(new single_item());
                //rb.add_item_block(new single_item());

            }

        });

        return load_main_page_data;
    });
})(window);
