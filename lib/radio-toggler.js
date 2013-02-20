/*global dome */

var GLOBAL = this.GLOBAL || {};

(function (G, d) {

  G.setupRadioToggler = function (params) {
    if (params.offRadio.checked) {
      d.cn.add("hidden", params.togglee);
    }

    d.on(params.onRadio, "click", function () {
      d.cn.rm("hidden", params.togglee);
    });

    d.on(params.offRadio, "click", function () {
      d.cn.add("hidden", params.togglee);
    });
  };

}(GLOBAL, dome));
