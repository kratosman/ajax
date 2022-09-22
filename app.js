function ajax(params) {
  const xhr = new XMLHttpRequest();
  const URL = params.url;
  const methods = params.method;

  xhr.addEventListener("load", function () {
    if (this.readyState == 4 && this.status == 200) {
      var myArr =
        typeof this.responseText === "string"
          ? JSON.parse(this.responseText)
          : xhr.responseText;
      var cb = params.success(myArr);
      if (typeof cb === "function") {
        throw "Callback must be a function";
      }
      return cb;
    }
  });
  xhr.onerror = function () {
    throw "Network Error";
  };
  xhr.open(methods, URL, true);
  xhr.send();
  return params;
}
export default ajax;
