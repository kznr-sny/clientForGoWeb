"use strict";

(g => {
  const o = {
    init: function() {
      const self = this;
      console.log("util");
    }
  };

  g.my = o;
})((this || 0).self || global);
