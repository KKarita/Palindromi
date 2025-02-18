//"readline-sync":n käyttöönotto
var input = require("readline-sync");

//Funktio tarkistaa onko annettu sana palindromi
function palindrome(word) {
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  //Vertaillaan annettua ja käänettyä sanaa
  return word === reversed;
}

//Funktion testausta eri syötteillä
const testWord = "nenonen";
console.log(`Onko "${testWord}" palindromi?`, palindrome(testWord));

const testWordTwo = "kissa";
console.log(`Onko "${testWordTwo}" palindromi?`, palindrome(testWordTwo));
