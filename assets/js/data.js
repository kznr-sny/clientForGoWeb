"use strict";

(g => {
  const o = {
    init: function() {
      let self = this;
    },
    ajax_post_json: function(url = null, data = {}) {
      if (!url || 0 === Object.keys(data).length) {
        return false;
      }
      const method = "POST";
      const body = JSON.stringify(data);

      fetch(url, { method: method, body: body })
        .then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error();
          }
        })
        .then(jsonData => {
          console.log(jsonData);
          return JSON.stringify(jsonData);
        })
        .catch(err => {
          console.log(err);
          return {};
        });
    }
  };

  g.my.data = o;
})((this || 0).self || global);
