var selectElementsStartingWithA = function(array) {
  return array.filter(function(word) {
    return (word[0] == 'a' || word[0] == 'A');
  });
}

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(word) {
    if ((/^[aeiou]$/i).test(word[0]) == true) {
      return word;
    };
  });
}

var removeNullElements = function(array) {
  return array.filter(function(n) {
    return n != undefined;
  });
}

var removeNullAndFalseElements = function(array) {
  return array.filter(function(n) {
    return n != null && n !== false;
  });
}

var reverseWordsInArray = function(array) {
  results = [];
  for (i = 0; i < array.length; i++) {
    results.push(array[i].split("").reverse().join(""));
  }
  return results;
}

var everyPossiblePair = function(array) {
  var results = [];
  for (var i = 0; i < array.sort().length - 1; i++) {
    for (var j = i + 1; j < array.sort().length; j++) {
      results.push([array[i], array[j]]);
    }
  }
  return results;
}

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  return array.sort(function(a, b) {
    var lastA = a.charAt(a.length - 1);
    var lastB = b.charAt(b.length - 1);
    if (lastA > lastB) {
      return 1;
    } else if (lastA < lastB) {
      return -1;
    } else {
      return 0;
    }
  })
}

var getFirstHalf = function(string) {
  return string.substring(0, Math.ceil(string.length / 2));
}

var makeNegative = function(number) {
  return number >= 0 ? number * -1 : number;
}

var numberOfPalindromes = function(array) {
  var count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] == array[i].split("").reverse().join("")) {
      count += 1;
    }
  }
  return count;
}

var shortestWord = function(array) {
  var shortest = array.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
  return shortest;
}

var longestWord = function(array) {
  var longest = array.reduce(function(a, b) {
    return a.length <= b.length ? b : a;
  })
  return longest;
}

var sumNumbers = function(array) {
  sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

var repeatElements = function(array) {
  return array.concat(array);
}

var stringToNumber = function(string) {
  return parseInt(string);
}

var calculateAverage = function(array) {
  sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] <= 5) {
      results.push(array[i]);
    } else if (array[i] > 5) {
      return results
    }
  }
  return results
}

var convertArrayToObject = function(array) {
  var obj = {};
  for (var i = 0; i < array.length; i += 2)
    obj[array[i]] = array[i + 1];
  return obj;
}

var getAllLetters = function(array) {
  letters = array.toString().split('').sort();
  var unique = letters.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
  })
  return unique.filter(function(a) {
    return a !== ','
  });
}

var swapKeysAndValues = function(object) {
  var swapped = {};
  for (var key in object) {
    swapped[object[key]] = key;
  }
  return swapped;
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return string.replace(/[^a-z _]/g, '');;
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  return date.toLocaleDateString();
}

var getDomainName = function(string) {
  var temp = string.replace(/.*@/, '').split('.com');
  return temp[temp.length - 2];
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return (string.match(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) ? true : false;
}

var squareRoot = function(number) {
  return Math.sqrt(number);
}

var factorial = function(number) {
  return (number != 1) ? number * factorial(number - 1) : 1;
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return Math.ceil((number - 32) * (5 / 9));
}

var letterPosition = function(array) {
  return 'Write your method here';
}
