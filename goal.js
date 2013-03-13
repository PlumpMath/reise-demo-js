/*global FINN */

(function (R, d) {

  R.setupDatePicker({
    startDate: new Date(),
    maxDate: 0,
    element: d.id("fromDate")
  });

  var toDate = d.id("toDate");

  R.setupDatePicker({
    startDate: new Date(),
    maxDate: 0,
    element: toDate
  });

  R.setupRadioToggler({
    onRadio: d.id("turnOnRoundtrip"),
    offRadio: d.id("turnOffRoundtrip"),
    togglee: toDate
  });

  R.setupMultiFormSelect({
    select: d.id("numChildrenSelect"),
    root: d.id("childAgeSelects"),
    template: d.id("childAgeSelectTemplate").innerHTML
  });

}(FINN.reise, FINN.dom));
