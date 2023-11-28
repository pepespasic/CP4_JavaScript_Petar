/** 
 * Feel free to use this file to test your endpoints.
 */
"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    fetch('/jokebook/joke/funnyJoke')
      .then(checkStatus)
      .then(resp => resp.json())
      .then(console.log);
  }

  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }
})();