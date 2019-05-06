"use strict";

(g => {
  const o = {
    init: function() {
      const self = this;
    },
    ajax_post_json: function(url = null, data = {}) {
      if (!url || 0 === Object.keys(data).length) {
        return false;
      }
      const method = "POST";
      const body = JSON.stringify(data);

      return new Promise((resolve, reject) => {
        fetch(url, { method: method, body: body })
          .then(res => {
            if (res.ok) {
              resolve(res.json());
            } else {
              reject(new Error());
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  };

  g.my.data = o;
})((this || 0).self || global);
