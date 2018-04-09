/**
 * Created by Cubla on 08.04.2018.
 */



(function(_export) {
    var name = "js/libs/base";
    var libs = [
        "js/libs/tools"
    ];

    define(name, libs, function () {
        var tools = require("js/libs/tools");

        var root_class = function () {
        };


        root_class.create = function (_name, _data) {
            var base = function () {};
            if(_data == undefined){
                _data = _name;
                _name = "";
            }
            var newclass = Function("return function " + _name + "() {return " + _name + ".prototype.constructor.apply(this, arguments);};")();

            base.prototype = this.prototype;
            newclass.prototype = new base();

            for (var k in _data) {
                newclass.prototype[k] = _data[k];
            }

            for (var m in this) {
                if (this.hasOwnProperty(m) && this[m] instanceof Function) {
                    newclass[m] = this[m]
                }
            }

            if(_data == undefined){
                debugger;
            }

            var cur = this;

            newclass.prototype.constructor = _data && _data.hasOwnProperty("constructor") ? _data.constructor : function () {
                cur.apply(this, arguments);
            };
            newclass.create = this.create;

            return newclass;
        };


        var count = 0;
        var Base = root_class.create("root", {
            constructor: function (_options) {
                var base = {};
                tools.extend(base, _options);
                this.__handlers = {};
                this.__types = {};
            },
            on: function (_type, _callback) {
                var sid = count++;
                this.__handlers[sid] = {
                    type: _type,
                    callback: _callback
                };

                if(!this.__types[_type]){
                    this.__types[_type] = [];
                }
                this.__types[_type].push(sid);
            },
            off: function (_sid) {
                var handle = this.__handlers[_sid];
                if(handle){
                    var types_list = this.__types[handle.type];
                    var index = types_list.indexOf(_sid);
                    if(index != -1){
                        types_list.splice(index, 1);
                    }
                    delete this.__handlers[_sid];
                }
            },
            fire: function (_type, _data) {
                var types = this.__types[_type];
                if(types) {
                    var a = 0;
                    while (a < types.length) {
                        this.__handlers[types[a]].callback(_data);
                        a++;
                    }
                }
            },
            trigger: function (_type, _data) {
                return this.fire(_type, _data);
            }
        });

        return Base;
    });
})(window);
