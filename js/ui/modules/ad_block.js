/**
 * Created by Cubla on 22.04.2018.
 */
(function(_export) {
    var name = "js/ui/modules/ad_block";
    var libs = [
        "js/libs/base",
        "js/requests/content/primary_ad_unit",
        "js/ui/single_item"
    ];

    define(name, libs, function () {
        var Base = require("js/libs/base");

        var primary_ad_unit = require("js/requests/content/primary_ad_unit");
        var single_item = require("js/ui/single_item");

        var ad_block = Base.create("ad_block", {
            constructor: function (_options) {
                var base = {
                    message_title: "Уникальные игровые джостики",
                    button_text: "Перейти в магазин",
                    message_text: "Любишь играть и хочешь выдиляться от своих друзей?<br>Быть серой массой не для тебя? Тогда вперед в магазин<br>Jostic.com. Здесь ты найдешь джостики и много другого<br>игрового инвентаряпо душе",
                    anchor: "#module-ad-block",
                    image: "images/ad_img.png",
                };
                tools.extend(base, _options);

                Base.prototype.constructor.call(this, base);

                this.__message_title = base.message_title;
                this.__button_text = base.button_text;
                this.__message_text = base.message_text;
                this.__anchor = base.anchor;
                this.__image = base.image;
                this.__init();
            },
            __init: function () {
                this.wrapper = this.__module = $("<div class=\"ui-module ui-module-advert\">");
                this.__left = $("<div class=\"g-fl g-bs ui-module-advert-left\">");
                this.__image = $("<img src=\"" + this.__image + "\" height=\"320\" class=\"ui-module-advert-image\">");

                this.__right = $("<div class=\"g-fl g-bs ui-module-advert-right\">");
                var dymmy_70px = $("<div class=\"ui-dymmy\" style=\"height:70px\">");
                this.__title = $("<div class=\"g-bs ui-module-advert-title\">");
                var dymmy_20px = $("<div class=\"ui-dymmy\" style=\"height:20px\">");
                this.__text = $("<div class=\"g-bs ui-module-advert-description\">");
                var dymmy_20px_2 = $("<div class=\"ui-dymmy\" style=\"height:20px\">");
                this.__button = $("<div class=\"g-bs ui-module-advert-button\">");


                this.__module.append(this.__left);
                this.__left.append(this.__image);
                this.__module.append(this.__right);
                this.__right.append(dymmy_70px);
                this.__right.append(this.__title);
                this.__right.append(dymmy_20px);
                this.__right.append(this.__text);
                this.__right.append(dymmy_20px_2);
                this.__right.append(this.__button);


                this.__title.text(this.__message_title);
                this.__text.html(this.__message_text);
                this.__button.text(this.__button_text);

                var rpl = new primary_ad_unit();
                rpl.send();
                rpl.on("success", this.__on_load_products.bind(this));
            },

            __on_load_products: function (_event) {
                var text = _event.data.Data.description.split("&lt;br&gt;").join("<br>");

                this.__image.attr({src: "http://api.twiger.mcdir.ru" + _event.data.Data.picture});
                this.__title.text(_event.data.Data.name);
                this.__text.html(text);
                this.__button.text(this.__button_text);



            },
            anchor: function () {
                return this.__anchor;
            }
        });

        return ad_block;
    });
})(window);
