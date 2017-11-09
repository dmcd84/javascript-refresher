var selectElementsStartingWithA = function(array) {
  return array.filter(function(word){
    return (word[0] == 'a' || word[0] == 'A');
  });
}

var selectElementsStartingWithVowel = function(array) {
  return array.filter(function(word) {
    if ((/^[aeiou]$/i).test(word[0])==true){
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
  for(i = 0; i < array.length; i++){
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
  return 'Write your method here';
}

var sortByLastLetter = function(array) {
  return array.sort(function(a,b){
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
  return 'Write your method here';
}

var makeNegative = function(number) {
  return 'Write your method here';
}

var numberOfPalindromes = function(array) {
  return 'Write your method here';
}

var shortestWord = function(array) {
  return 'Write your method here';
}

var longestWord = function(array) {
  return 'Write your method here';
}

var sumNumbers = function(array) {
  return 'Write your method here';
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
   var results = [];
   for (var i = 0; i < array.length; i++) {
     while (array[i] <= 5) {
       results.push(array[i]);
     }
   }
   return results;
}

var convertArrayToObject = function(array) {
  return 'Write your method here';
}

var getAllLetters = function(array) {
  return 'Write your method here';
}

var swapKeysAndValues = function(object) {
  return 'Write your method here';
}

var sumKeysAndValues = function(object) {
  return 'Write your method here';
}

var removeCapitals = function(string) {
  return 'Write your method here';
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
