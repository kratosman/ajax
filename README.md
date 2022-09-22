# ajax

import ajax from "./app.js";

ajax({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts",
  success: function (response) {
    console.log(response);
  },
});
