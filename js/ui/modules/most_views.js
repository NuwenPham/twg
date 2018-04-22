/**
 * Created by Cubla on 14.04.2018.
 */
(function(_export) {
    var name = "js/ui/modules/most_views";
    var libs = [
        "js/libs/base",
        "js/requests/product/filteredlist",
        "js/ui/single_item"
    ];

    define(name, libs, function () {
        var Base = require("js/libs/base");

        var request_filteredlist = require("js/requests/product/filteredlist");
        var single_item = require("js/ui/single_item");

        var most_views = Base.create("most_views", {
            constructor: function(_options){
                var base = {
                    title_text: "Самые просматриваемые",
                    load_button_text: "Смотреть все",
                    anchor: "#module-recommendation-items"
                };
                tools.extend(base, _options);

                Base.prototype.constructor.call(this, base);

                this.__title_text = base.title_text;
                this.__load_button_text = base.load_button_text;
                this.__anchor = base.anchor;
                this.__init();
            },
            __init: function () {
                this.wrapper = $("<div class=\"ui-module-container\">");


                this.wrapper = this.__module = $("<div class=\"ui-module ui-module-recommendation\">");
                //this.__module = $("<div class=\"ui-module ui-module-recommendation\">");
                this.__ui_title = $("<div class=\"ui-module-title\">");
                this.__content = $("<div class=\"module-recommendation-items\">");

                this.__dymmy_spacer = $("<div class=\"ui-dymmy\">");

                this.__button_lay = $("<div class=\"ui-recommendation-button-lay\">");
                this.__centerer = $("<div class=\"ui-centerer\">");
                this.__ui_big_button = $("<div class=\"ui-big-button ui-big-button-icon\">");


                //this.wrapper.append(this.__module);
                this.__module.append(this.__ui_title);
                this.__module.append(this.__content);
                this.__module.append(this.__dymmy_spacer);
                this.__module.append(this.__button_lay);
                this.__button_lay.append(this.__centerer);
                this.__centerer.append(this.__ui_big_button);

                this.__dymmy_spacer.css({height: "20px"});
                this.__ui_title.text(this.__title_text);
                this.__ui_big_button.text(this.__load_button_text);

                var rpl = new request_filteredlist();
                rpl.send();
                rpl.on("success", this.__on_load_products.bind(this));
            },

            add_item_block: function (_item) {
                this.__content.append(_item.wrapper);
            },
            __on_load_products: function (_event) {
                var a = 0;
                while(a < _event.data.Data.length){
                    var block_data = _event.data.Data[a];
                    this.add_item_block(new single_item({
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
            },
            anchor: function(){
                return this.__anchor;
            }
        });

        return most_views;
    });
})(window);
