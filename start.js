/**
 * Created by Cubla on 07.08.2017.
 */
// config.js
requirejs.config({
    baseUrl: "",
        paths: {
            chart: "chart"
        }
});

// main.js
require(["js/main"], function(){
    var main = require("js/main");
});