// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var string = '';
  stringify(obj);
  return string;

  function stringify(element) {
    // if element is a primitive add to string with correct quotation marks
    // if it is a function return and add nothing to string
    if (typeof element === 'function') return;
    if (!element) return (string += `${element}`);
    if (typeof element === 'string') return (string += `"${element}"`);
    if (typeof element === 'number') return (string += `${element}`);
    if (typeof element === 'boolean') return (string += `${element}`);

    // if element is an array, add the opening bracket for the array
    if (element.constructor === [].constructor) {
      string += '[';
      for (var i = 0; i < element.length; i++) {
        // recursively call stringify for each value of the array, adding a comma after every element except the last.
        stringify(element[i]);
        if (i !== element.length - 1) {
          string += ',';
        }
      }
      // after stringifying each element add the closing bracket
      string += ']';
    }

    // if element is an object add opening bracket and get the keys
    if (element.constructor === {}.constructor) {
      string += '{';
      var keys = Object.keys(element);
      for (var i = 0; i < keys.length; i++) {
        // loop through each key-value pair adding the key as a string and calling stringify on each value
        // if the value is either a function or undefined continue to the next pair adding nothing to the string
        if (
          typeof element[keys[i]] === 'function' ||
          typeof element[keys[i]] === 'undefined'
        ) {
          continue;
        } else {
          string += '"' + keys[i] + '"' + ':';
          stringify(element[keys[i]]);
          if (i !== keys.length - 1) {
            string += ',';
          }
        }
      }
      string += '}';
    }
  }
};
