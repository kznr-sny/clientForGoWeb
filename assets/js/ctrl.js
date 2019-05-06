"use strict";

(g => {
  const o = {
    init: function() {
      const self = this;
      self.init_event.call(self);
      self.posttest.call(self);
    },
    init_event: function() {
      const self = this;
      document.addEventListener("DOMContentLoaded", function() {
        self._toggle_click.call(self);
        self._url_add_click.call(self);
        self._url_copy_click.call(self);
        self._param_add_click.call(self);
      });
    },
    posttest: function() {
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

      my.data.ajax_post_json
        .call(my.data, url, data)
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    _toggle_click: function() {
      const parent = document.getElementById("main_form");

      parent.addEventListener("click", e => {
        if (e.srcElement.classList.contains("jsToggle")) {
          const elm = e.srcElement;
          const current = elm.classList.contains("icon-open")
            ? "open"
            : "close";
          const next = elm.classList.contains("icon-open") ? "close" : "open";

          elm.classList.remove(`icon-${current}`);
          elm.classList.add(`icon-${next}`);
          elm.parentNode.parentNode.parentNode.classList.remove(current);
          elm.parentNode.parentNode.parentNode.classList.add(next);
        }
      });
    },
    _url_add_click: function() {
      const parent = document.getElementById("main_form");
      const innerContent = `
        <div class="acd-block open">
          <label class="acd-label">
            <span><i class="icon-open jsToggle"></i></span>
            URL:
            <input type="text" name="URL" size="50" />
            <span><i class="icon-plus jsUrlAdd"></i></span>
            <span><i class="icon-copy jsUrlCopy"></i></span>
          </label>
          <div class="acd-content">
            PARAM:
            <input type="text" name="KEY" />
            <input type="text" name="VALUE" />
            <span><i class="icon-plus jsParamAdd"></i></span>
          </div>
        </div>
      `;

      parent.addEventListener("click", e => {
        if (e.srcElement.classList.contains("jsUrlAdd")) {
          const elm = e.srcElement.parentNode.parentNode.parentNode;
          elm.insertAdjacentHTML("beforeend", innerContent);
        }
      });
    },
    _url_copy_click: function() {
      const parent = document.getElementById("main_form");

      parent.addEventListener("click", e => {
        if (e.srcElement.classList.contains("jsUrlCopy")) {
          const elm = e.srcElement.parentNode.parentNode.parentNode;
          const clone = elm.cloneNode(true);
          elm.parentNode.insertBefore(clone, elm.nextSibling);
        }
      });
    },
    _param_add_click: function() {
      const parent = document.getElementById("main_form");
      const innerContent = `
        <div class="acd-content">
          PARAM:
          <input type="text" name="KEY" />
          <input type="text" name="VALUE" />
          <span><i class="icon-plus jsParamAdd"></i></span>
        </div>
      `;

      parent.addEventListener("click", e => {
        if (e.srcElement.classList.contains("jsParamAdd")) {
          const elm = e.srcElement.parentNode.parentNode;
          elm.insertAdjacentHTML("afterend", innerContent);
        }
      });
    }
  };

  g.my.ctrl = o;
})((this || 0).self || global);
