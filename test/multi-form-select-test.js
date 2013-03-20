/*global GLOBAL, dome */

(function ($, d, G) {
  buster.testCase("Multi Form Select", {
    setUp: function () {
      this.root = d.el.div();
    },

    "should show one child select for one child": function () {
      G.setupMultiFormSelect({
        select: d.el.select([
          d.el.option({ value: "0" }, "0 kolli"),
          d.el.option({ value: "1", selected: true }, "1 kolli"),
          d.el.option({ value: "2" }, "2 kolli"),
          d.el.option({ value: "3" }, "3 kolli")
        ]),
        root: this.root,
        template: "<select></select>"
      });

      assert.equals(this.root.childNodes.length, 1);
      assert.tagName(this.root.firstChild.firstChild, "select");
    },

    "should show two elements when choosing 2": function () {
      G.setupMultiFormSelect({
        select: d.el.select([
          d.el.option({ value: "0" }, "0 kolli"),
          d.el.option({ value: "1" }, "1 kolli"),
          d.el.option({ value: "2", selected: true }, "2 kolli"),
          d.el.option({ value: "3" }, "3 kolli")
        ]),
        root: this.root,
        template: "<div></div>"
      });

      assert.equals(this.root.childNodes.length, 2);
      assert.tagName(this.root.firstChild, "div");
      assert.tagName(this.root.lastChild, "div");
    },

    "should changes elements when choosing another value": function () {
      var select = d.el.select([
        d.el.option({ value: "0" }, "0 kolli"),
        d.el.option({ value: "1" }, "1 kolli"),
        d.el.option({ value: "2", selected: true }, "2 kolli"),
        d.el.option({ value: "3" }, "3 kolli")
      ]);

      G.setupMultiFormSelect({
        select: select,
        root: this.root,
        template: "<div></div>"
      });

      $(select).val("1").trigger("change");

      assert.equals(this.root.childNodes.length, 1);
    },

    "should not discard info when updating": function () {
      var select = d.el.select([
        d.el.option({ value: "0" }, "0 kolli"),
        d.el.option({ value: "1" }, "1 kolli"),
        d.el.option({ value: "2", selected: true }, "2 kolli"),
        d.el.option({ value: "3" }, "3 kolli")
      ]);

      G.setupMultiFormSelect({
        select: select,
        root: this.root,
        template: "<input type='text'>"
      });

      this.root.firstChild.value = "I wanna live!";

      $(select).val("3").trigger("change");

      assert.equals(this.root.firstChild.value, "I wanna live!");
    }

  });
}(jQuery, dome, GLOBAL));