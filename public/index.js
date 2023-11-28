/** 
 * Feel free to use this file to test your endpoints.
 */
"use strict";

(function() {
  window.addEventListener("load", init);

  

  function init() {
    let categoryList = qsa("label input")
    categoryList[0].addEventListener("change", makeRequest);
    categoryList[1].addEventListener("change", makeRequest);
  }
/**
    * Fetches data from random user api.
    */
function makeRequest() {
    // TODO
    let category = this.value;
    let url = "/jokebook/joke/" + category;
    id("categories").innerHTML = "";
    fetch(url)
      .then(statusCheck)
      .then(resp => resp.json())
      .then(processData)
      .catch(handleError);
  }
  /**
   * Retrieves image url from response and 
   * displays it on page.
   * @param {*} response web page with JSON data
   */
  function processData(response) {
    let categoryValue = response.;
    let image = document.createElement("img");
    image.src = imagePath;
    id("categories").appendChild(image);
  }

  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /** ------------------------------ Helper Functions  ------------------------------ */
   /**
   * Note: You may use these in your code, but remember that your code should not have
   * unused functions. Remove this comment in your own code.
   */

   /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
   function id(idName) {
    return document.getElementById(idName);
  }

  /**
  * Returns the first element that matches the given CSS selector.
  * @param {string} selector - CSS query selector.
  * @returns {object} The first DOM object matching the query.
  */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
  * Returns the array of elements that match the given CSS selector.
  * @param {string} selector - CSS query selector
  * @returns {object[]} array of DOM objects matching the query.
  */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
  * Returns a new element with the given tag name.
  * @param {string} tagName - HTML tag name for new DOM element.
  * @returns {object} New DOM object for given HTML tag.
  */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();