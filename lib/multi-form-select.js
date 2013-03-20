/*global GLOBAL, dome */

var GLOBAL = this.GLOBAL || {};

(function ($, d, G) {

  var validate = G.validator("multi-form-select", [
    "select",
    "root",
    "template"
  ]);

  G.setupMultiFormSelect = function (params) {
    validate(params);

    var select = params.select;
    var root = params.root;

    var updateElements = function () {
      var targetNum = select.options[select.selectedIndex].value;
      var currentNum = root.childNodes.length;

      if (targetNum > currentNum) {
        d.append(d.el.div({ innerHTML: params.template }), root);
        updateElements();
      } else if (targetNum < currentNum) {
        root.removeChild(root.lastChild);
        updateElements();
      }

    };

    updateElements();

    $(select).on("change", updateElements);
  };

}(jQuery, dome, GLOBAL));
