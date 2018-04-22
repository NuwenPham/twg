/**
 * Created by Cubla on 09.04.2018.
 */
(function(_export) {
    var name = "js/ui/single_item";
    var libs = [
        "js/libs/base"
    ];

    define(name, libs, function () {
        var Base = require("js/libs/base");

        var single_item = Base.create("single_item", {
            constructor: function(_options){
                var base = {
                    item_image: "http://api.twiger.mcdir.ru/project/storage/img/product/0/1/mainImg.jpg",
                    title_text: "SAMSUNG Galaxy S8+ 64Gb",
                    price: 1500,
                    currency: "₽",
                    rating: 0,
                    comments_count: 0,
                    likes_count: 0,
                };
                tools.extend(base, _options);

                Base.prototype.constructor.call(this, base);
                this.__item_image = base.item_image;
                this.__title_text = base.title_text;
                this.__price = base.price;
                this.__currency = base.currency;
                this.__rating = base.rating;
                this.__comments_count = base.comments_count;
                this.__likes_count = base.likes_count;
                this.__init();
            },
            __init: function () {
                this.wrapper = $("<div class=\"ui-item-block\">");


                var item_level_first = $("<div class=\"ui-item-level-first\">");
                var ui_item_icon = $("<div class=\"ui-item-icon\">");
                var ui_item_icon_img = $("<img class=\"ui-item-icon-img\">");
                var ui_item_title = $("<div class=\"ui-item-title\">");
                var ui_item_title_text = $("<div class=\"ui-item-title-text gf-cb\">");
                var ui_dymmy = $("<div class=\"ui-dymmy\" style=\"height:5px\">");
                var ui_item_title_text_2 = $("<div class=\"ui-item-title-text gf-cb\">");
                var ui_item_title_price_amount = $("<span class=\"ui-item-title-price-amount\">");
                var ui_item_title_price_currency = $("<span class=\"ui-item-title-price-currency\">");
                var ui_item_interactive = $("<div class=\"ui-item-interactive g-bs\">");
                var ui_item_interactive_item = $("<div class=\"ui-item-interactive-item g-bs g-bs g-fl\">");
                var ui_ib_icon_rating = $("<div class=\"ui-ib-icon ui-ib-icon-rating g-fl g-bs\">");
                var ui_ib_count = $("<div class=\"ui-ib-count g-fr g-bs gf-cb\">");
                var ui_item_interactive_item_2 = $("<div class=\"ui-item-interactive-item g-bs g-bs g-fr\">");
                var ui_ib_icon_comments = $("<div class=\"ui-ib-icon ui-ib-icon-comments g-fl g-bs\">");
                var ui_ib_count_2 = $("<div class=\"ui-ib-count g-fr g-bs gf-cb\">");
                var ui_item_interactive_item_3 = $("<div class=\"ui-item-interactive-item g-bs g-bs g-fr\">");
                var ui_ib_icon_likes = $("<div class=\"ui-ib-icon ui-ib-icon-likes g-fl g-bs\">");
                var ui_ib_count_3 = $("<div class=\"ui-ib-count g-fr g-bs gf-cb\">");
                var item_level_second = $("<div class=\"ui-item-level-second\">");
                var ui_item_sale = $("<div class=\"ui-item-sale g-bs g-fl gf-cr\">");
                var ui_item_like = $("<div class=\"ui-item-like g-fr\">");


                this.wrapper.append(item_level_first);
                    item_level_first.append(ui_item_icon);
                        ui_item_icon.append(ui_item_icon_img);
                    item_level_first.append(ui_item_title);
                        ui_item_title.append(ui_item_title_text);
                        ui_item_title.append(ui_dymmy);
                        ui_item_title.append(ui_item_title_text_2);
                            ui_item_title_text_2.append(ui_item_title_price_amount);
                            ui_item_title_text_2.append(ui_item_title_price_currency);
                    item_level_first.append(ui_item_interactive);
                        ui_item_interactive.append(ui_item_interactive_item);
                            ui_item_interactive_item.append(ui_ib_icon_rating);
                            ui_item_interactive_item.append(ui_ib_count);
                        ui_item_interactive.append(ui_item_interactive_item_2);
                            ui_item_interactive_item_2.append(ui_ib_icon_comments);
                            ui_item_interactive_item_2.append(ui_ib_count_2);
                        ui_item_interactive.append(ui_item_interactive_item_3);
                            ui_item_interactive_item_3.append(ui_ib_icon_likes);
                            ui_item_interactive_item_3.append(ui_ib_count_3);
                this.wrapper.append(item_level_second);
                    item_level_second.append(ui_item_sale);
                    item_level_second.append(ui_item_like);


                ui_item_icon_img.attr({
                    height: "150",
                    src: this.__item_image
                });

                ui_item_title_text.text(this.__title_text);

                ui_item_title_price_amount.text(this.__price);
                ui_item_title_price_currency.text(this.__currency);

                ui_ib_count.text(this.__rating);
                ui_ib_count_2.text(this.__comments_count);
                ui_ib_count_3.text(this.__likes_count);

                ui_item_sale.text("Скидка 25%")
            }

        });

        return single_item;
    });
})(window);
