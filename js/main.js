/**
 * Created by Cubla on 07.08.2017.
 */
(function(_export) {
    var libs = [
        "js/libs/tools",
        "js/utils/jquery-3.3.1.min.js",
        "js/libs/search_tags",
        "js/libs/base",
        "js/requests/product/list",
        "js/load_main_page_data"
    ];

    define(libs, function () {
        var tools = require("js/libs/tools");
        var product_list = require("js/requests/product/list");
        var load_main_page_data = require("js/load_main_page_data");
        window.tools = tools;


        new load_main_page_data();

    });
})(window);
