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
  array.unshift(element);
  return array;
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
  return string.substring(0, Math.ceil(string.length/2));
}

var makeNegative = function(number) {
  return number >= 0 ? number * -1 : number;
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
  sum = 0;
  for(i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

var repeatElements = function(array) {
  return 'Write your method here';
}

var stringToNumber = function(string) {
  return 'Write your method here';
}

var calculateAverage = function(array) {
  sum = 0;
  for(i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum/array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
   var results = [];
   for (var i = 0; i < array.length; i++) {
     if (array[i] <= 5) {
       results.push(array[i]);
     } else if (array[i] > 5){
       return results
     }
   }
   return results
}

var convertArrayToObject = function(array) {
  var obj = {};
  for (var i = 0; i < array.length; i+=2)
    obj[array[i]] = array[i+1];
  return obj;
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
  // var words = string.split(" ");
  // var result = [];
  // for(i=0; i<words.length; i++){
  //   result.push(words[i].charAt(0).toUpperCase()+words[i].slice(1));
  // }
  // console.log(words);
  // return result.join(" ");
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
