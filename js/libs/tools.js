/**
 * Created by Cubla on 08.04.2018.
 */
(function(_export) {
    var name = "js/libs/tools";

    var libs = [

    ];

    define(name, libs, function () {
        var tools = {};
        tools.extend = function (_first, _second, _recursive) {
            for (var k in _second) {
                if (_second.hasOwnProperty(k)) {
                    if(_recursive && typeof _second[k] == "object"){
                        var new_obj = {};
                        tools.extend(new_obj, _second[k]);
                        _first[k] = new_obj;
                    } else {
                        _first[k] = _second[k];
                    }
                }
            }
            return _first;
        };
        return tools;
    });
})(window);
