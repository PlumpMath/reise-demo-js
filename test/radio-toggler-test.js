/*global GLOBAL, dome */

(function (G, d) {
  function setupRadioToggler() {
    G.setupRadioToggler({
      onRadio: this.onRadio,
      offRadio: this.offRadio,
      togglee: this.togglee
    });
  }

  buster.testCase("Radio Toggler", {
    setUp: function () {
      this.togglee = d.el.div();
      this.offRadio = d.el.input({ type: "radio", name: "toggler" });
      this.onRadio = d.el.input({ type: "radio", name: "toggler" });
    },

    "should require onRadio": function () {
      assert.exception(function () {
        G.setupRadioToggler({
          offRadio: this.offRadio,
          togglee: this.togglee
        });
      });
    },

    "should require offRadio": function () {
      assert.exception(function () {
        G.setupRadioToggler({
          onRadio: this.onRadio,
          togglee: this.togglee
        });
      });
    },

    "should require togglee": function () {
      assert.exception(function () {
        G.setupRadioToggler({
          offRadio: this.offRadio,
          onRadio: this.onRadio
        });
      });
    },

    "should hide when already in off-mode": function () {
      this.offRadio.checked = true;
      setupRadioToggler.call(this);

      assert.className(this.togglee, "hidden");
    },

    "should not be hidden when already in on-mode": function () {
      this.onRadio.checked = true;
      setupRadioToggler.call(this);

      refute.className(this.togglee, "hidden");
    },

    "should turn on": function () {
      this.offRadio.checked = true;
      setupRadioToggler.call(this);

      this.onRadio.click();

      refute.className(this.togglee, "hidden");
    },

    "should turn off": function () {
      this.onRadio.checked = true;
      setupRadioToggler.call(this);

      this.offRadio.click();

      assert.className(this.togglee, "hidden");
    }
  });
}(GLOBAL, dome));