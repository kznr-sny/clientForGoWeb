"use strict";

(g => {
  const o = {
    init: function() {
      let self = this;
      console.log("util");
    }
  };

  g.my = o;
})((this || 0).self || global);
