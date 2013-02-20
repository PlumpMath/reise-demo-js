/*global GLOBAL, dome */

(function (d, G) {
  buster.testCase("Child Ages", {
    "should show one child select for one child": function () {
      var root = d.el.div();

      G.setupChildAges({
        numChildrenSelect: d.el.select([
          d.el.option({ value: "0" }, "0 barn"),
          d.el.option({ value: "1", selected: true }, "1 barn"),
          d.el.option({ value: "2" }, "2 barn"),
          d.el.option({ value: "3" }, "3 barn")
        ]),
        root: root
      });

      assert.equals(root.childNodes.length, 1);
      assert.tagName(root.firstChild, "select");
    }
  });
}(dome, GLOBAL));