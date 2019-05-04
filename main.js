(() => {
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
  const body = JSON.stringify(data);

  // const body = createData({
  //   // urls: ["https://google.co.jp", "https://google.co.jp"],
  //   urls: [
  //     { id: 1, url: "https://google.co.jp" },
  //     { id: 2, url: "https://google.co.jp" }
  //   ],
  //   params: [
  //     { id: 1, key: "key11", value: "val11" },
  //     { id: 1, key: "key12", value: "val12" },
  //     { id: 2, key: "key21", value: "val21" },
  //     { id: 2, key: "key22", value: "val22" }
  //   ]
  // });

  fetch(url, { method: "POST", body: body })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error();
      }
    })
    .then(jsonData => {
      console.log(JSON.stringify(jsonData));
    })
    .catch(err => {
      console.log(err);
    });

  function createData(data) {
    const form = new URLSearchParams();

    Object.keys(data).forEach(key => {
      const value = data[key];
      if (Array.isArray(value)) {
        value.forEach(entry => {
          form.append(key + "[]", entry);
        });
      } else {
        form.append(key, value);
      }
    });

    return form;
  }
})();
