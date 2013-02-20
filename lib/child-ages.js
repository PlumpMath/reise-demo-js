/*global GLOBAL, dome */

var GLOBAL = this.GLOBAL || {};

(function (d, G) {

  G.setupChildAges = function (params) {
    params.root.appendChild(d.el.select());
  };

}(dome, GLOBAL));
