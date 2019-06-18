// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// input: string - classname
// ouput: array of elements with the matching classname
// method: select each element from the body; look at each childNode, if childNode has  a childNode make recursive call, else check if element.classList.value is equal to the given classname, if it is add to results, othewise move on;//
var getElementsByClassName = function(className) {
  var body = document.body;
  var results = [];

  function selectElements(element) {
    if (element.classList && element.classList.value.search(className) !== -1) {
      results.push(element);
    }
    if (element.hasChildNodes()) {
      for (var i = 0; i < element.childNodes.length; i++) {
        if (element.childNodes[i].classList) {
          selectElements(element.childNodes[i]);
        }
      }
    }
  }

  selectElements(body);
  return results;
};
