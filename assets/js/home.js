"use strict";

(g => {
  const o = {
    init: function() {
      let self = this;

      my.init.call(my);
      my.data.init.call(my.storage);
      my.ctrl.init.call(my.ctrl);
    }
  };

  g.my.home = o;
})((this || 0).self || global);

(() => {
  my.home.init.call(my.home);
})();
