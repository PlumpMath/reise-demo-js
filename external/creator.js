/*global GLOBAL, cull */

var GLOBAL = this.GLOBAL || {};

(function (G) {
  var reject = cull.reject;

  G.compose = function (proto) {
    if (arguments.length === 0 || !proto) {
      throw new TypeError("compose expects at least one object argument");
    }
    var instance = Object.create(proto), i, l, prop;
    for (i = 1, l = arguments.length; i < l; ++i) {
      if (!arguments[i]) {
        throw new TypeError("Tried to compose null or undefined");
      }
      for (prop in arguments[i]) {
        instance[prop] = arguments[i][prop];
      }
    }
    return instance;
  };

  function fail(name, missing) {
    throw new TypeError(name + ": missing params {" + missing.join(', ') + "}");
  }

  function create(options) { return G.compose(this, options || {}); }

  G.creator = function (name, required) {
    if (!required || !required.length) {
      return create;
    }

    var validate = G.validator(name + ".create", required);
    return function (options) {
      validate(options);
      return G.compose(this, options);
    };
  };

  G.validator = function (name, required) {
    return function (options) {
      if (!options) { fail(name, required); }

      var inOptions = function (key) {
        return typeof options[key] !== "undefined" &&
          options[key] !== null;
      };

      var missing = reject(inOptions, required);
      if (missing.length > 0) { fail(name, missing); }
    };
  };

}(GLOBAL));
