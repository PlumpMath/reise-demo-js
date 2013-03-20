/*global GLOBAL, dome */

(function (G, d) {

  G.setupRadioToggler({
    onRadio: d.id("turnOnRoundtrip"),
    offRadio: d.id("turnOffRoundtrip"),
    togglee: d.id("to-field")
  });

  G.setupMultiFormSelect({
    select: d.id("noOfChildren"),
    root: d.id("childrens-ages"),
    template: d.id("childAgeSelectTemplate").innerHTML
  });

}(GLOBAL, dome));
