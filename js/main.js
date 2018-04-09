/**
 * Created by Cubla on 07.08.2017.
 */
(function(_export) {
    var libs = [
        "js/libs/tools",
        "js/utils/jquery-3.3.1.min.js",
        "js/libs/search_tags",
        "js/libs/base",
        "js/requests/product/list"
    ];

    define(libs, function () {
        var tools = require("js/libs/tools");
        var product_list = require("js/requests/product/list");
        window.tools = tools;


        //debugger;
        var pl = new product_list();
        pl.send();
        pl.on("success", function (_event) {
            console.log(_event.data);
        });

    });
})(window);
