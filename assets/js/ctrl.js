"use strict";

(g => {
  const o = {
    init: function() {
      let self = this;
      self.hoge.call(self);
    },
    hoge: function() {
      const url = "http://localhost:8080/Post";
      const data = {
        isPost: true,
        uris: [
          { id: 1, uri: "http://localhost:3000" },
          { id: 2, uri: "http://localhost:3000" }
        ],
        params: [
          { id: 1, key: "key11", value: "val11" },
          { id: 1, key: "key12", value: "val12" },
          { id: 2, key: "key21", value: "val21" },
          { id: 2, key: "key22", value: "val22" }
        ]
      };
      my.data.ajax_post_json.call(my.data, url, data);
    }
  };

  g.my.ctrl = o;
})((this || 0).self || global);
