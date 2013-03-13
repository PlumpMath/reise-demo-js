/*global GLOBAL, dome */

var GLOBAL = this.GLOBAL || {};

(function ($, d, G) {

  G.setupMultiFormSelect = function (params) {
    var select = params.select;

    var updateElements = function () {
      var i, num = select.options[select.selectedIndex].value;

      var htmlStrings = [];
      for (i = 0; i < num; i++) {
        htmlStrings.push(params.template);
      }

      params.root.innerHTML = htmlStrings.join("");
    };

    updateElements();

    $(select).on("change", updateElements);
  };

}(jQuery, dome, GLOBAL));
