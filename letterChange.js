var read = require('read'),
  str = read({ prompt: 'Enter a string: ' }, LetterChanges);

function LetterChanges(err, str) { 
  str = str.toLowerCase().split("");
  var vowels = 'aeiou';
  var alph = 'abcdefghijklmnopqrstuvwxyz';
  var newStr = '';
  var vowelledStr = '';

  
  for (var i = 0; i < str.length; i++) {
    if (str[i] == 'z'){
      newStr += 'a';
    } else if (alph.indexOf(str[i]) != -1 ){
      newStr += alph[alph.indexOf(str[i]) + 1];
    } else {
      newStr += str[i];
    }
  }
  
  for (var j =0; j < newStr.length; j++) {
    if (vowels.indexOf(newStr[j]) != -1) {
      vowelledStr += newStr.charAt(j).toUpperCase();
    } else {
      vowelledStr += newStr.charAt(j);
    }
    
  }
  
  console.log(vowelledStr);
}
//from coderByte