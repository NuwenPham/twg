/**
 * Created by Cubla on 08.04.2018.
 */
(function(_export) {
    var name = "js/requests/request";
    var libs = [
        "js/libs/base"
    ];

    define(name, libs, function () {
        var Base = require("js/libs/base");

        var request = Base.create("request", {
            constructor: function(_options){
                var base = {
                    host: "http://api.twiger.mcdir.ru",
                    method: "GET",
                    url: ""
                };
                tools.extend(base, _options);

                Base.prototype.constructor.call(this);

                this.__host = base.host;
                this.__method = base.method;
                this.__url = base.url;
                this.__init();
            },
            __init: function () {
                this.__xhr = new XMLHttpRequest();
                this.__xhr.upload.onprogress = function (_event) {
                    this.__on_progress(_event)
                }.bind(this);

                this.__xhr.onload = function (_event) {
                    var parsed = JSON.parse(_event.target.response);
                    this.__on_success({
                        data: parsed,
                        original: _event
                    })
                }.bind(this);

                this.__xhr.onerror = function (_event) {
                    this.__on_error(_event);
                }.bind(this)
                
            },
            send: function () {
                this.__xhr.open(this.__method, this.__host + "/" + this.__url, true);
                this.__xhr.send();
            },
            __on_success: function (_event) {
                this.fire("success", _event);
            },
            __on_error: function (_event) {
                this.fire("error", _event);
            },
            __on_progress: function (_event) {
                this.fire("progress", _event);
            }
        });

        return request;
    });
})(window);
