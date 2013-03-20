/*global dome */

var GLOBAL = this.GLOBAL || {};

(function (G, d) {

  var validate = G.validator("radio-toggler", [
    "offRadio",
    "onRadio",
    "togglee"
  ]);

  G.setupRadioToggler = function (params) {
    validate(params);

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
