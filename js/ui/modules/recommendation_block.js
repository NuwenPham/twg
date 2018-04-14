/**
 * Created by Cubla on 14.04.2018.
 */
(function(_export) {
    var name = "js/ui/modules/recommendation_block";
    var libs = [
        "js/libs/base"
    ];

    define(name, libs, function () {
        var Base = require("js/libs/base");

        var recommendation_block = Base.create("recommendation_block", {
            constructor: function(_options){
                var base = {
                    title_text: "Вам могут понравиться",
                    load_button_text: "Загрузить еще",
                };
                tools.extend(base, _options);

                Base.prototype.constructor.call(this, base);

                this.__title_text = base.title_text;
                this.__load_button_text = base.load_button_text;
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
            },

            add_item_block: function (_item) {
                this.__content.append(_item.wrapper);
            }
        });

        return recommendation_block;
    });
})(window);
