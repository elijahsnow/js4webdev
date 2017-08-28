(function() {
    // creating the element we want to append
    var newLink = document.createElement("a");
    // throws an array with all our p-tags
    var allParagraphs = document.getElementsByTagName("p");
    // the element we're going to append to
    var firstParagraph = allParagraphs[0];
    // get all h1 tags in the document
    var allh1s = document.getElementsByTagName("h1");
    // get the second h1 element in the document
    var firsth1Index = allh1s[1];

    // Refactoring our function to toggle display of paragraphs
    function toggleCopy(e){
        var allParagraphs = document.getElementsByTagName("p");

        for(var i = 0; i < allParagraphs.length; i++){
            var para = allParagraphs[i];
            // an if statement will execute whatever code you specify
            // between a set of curly braces, but only if the contents
            // of the parentheses that follow the if keywoerd evaluate
            // to true
            if(i === 0) {
                continue
            }
            if(para.style.display === "none"){
                para.style.display = "block";
            }
            else{
              para.style.display = "none";
            }
        }
        if(this === newLink){
          // remove the link when clicked
          this.remove();
          // change the  first h1 element color to purple
          firsth1Index.style.color = "#AC97E5";
          console.log("Displayed all paragraphs and changed h1 color to purple!!!");
        }
        if(e !== undefined && e.preventDefault !== undefined){
          e.preventDefault();
        }
    }

    // parameters of our anchor tag
    newLink.setAttribute("href", "#");
    newLink.setAttribute("class", "more-link");
    // text for our anchor tag
    newLink.innerHTML = "Read More";

    // adding addEventListener on newLink to listen for a click event
    // addEventListeneraccepts 2 arguments: a string with the event type we want
    // to listen to, and the function to be executed when that event takes place
    newLink.addEventListener("click", toggleCopy);

    //function call
    toggleCopy();
    // append anchor tag to our selected paragraph
    // appendChild  allows us to append a child to a DOM Node
    firstParagraph.appendChild(newLink);
}());
// An IIFE or Immediately Invoked Function Expression is a common JS design
// pattern used by most popular libraries to place all library code inside
// of a local scope. An IIFE protects a module's scope from the environment
// in which it is placed.
// (function(){
//    //...code goes here
// }());



//   ##### ELOQUENT JAVASCRIPT  EXERCISES #####

// LOOPING A TRIANGLE
// Write a loop that makes seven calls to console.log to output the following
// triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
for(var line = "#"; line.length < 8; line += "#" ){
    console.log(line);
}

// FIZZ BUZZ
// Write a program that uses console.log to print all the numbers from 1 to 100,
// with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working. modify your program to print "FizzBuzz" for numbers
// taht are divisble by both 3 and 5.

// option 1 (my solution)
for(var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
};

// option 2 (book solution, and much more succint solution)
for(var i = 1; i <= 100; i++){
    var output = "";
    if(i % 3 == 0) {
        output += "Fizz";
    }
    if(i % 5 == 0) {
        output += "Buzz";
    }
    console.log(output || i);
};


// CHESS BOARD
// Write a program that creates a string that represents an 8x8 grid, using newline
// characters to separate lines. At each position of the grid there is either a space
// or a "#" character. The characters should form a chess board. Passing this string
// to console.log should show something like this:
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

var size = 8;
var board = "";

for(var y = 0; y < size; y++){
  for (var x = 0; x < size; x++){
    if((x + y) % 2 == 0) {
      board += "#";
    }
    else{
      board += " ";
      }
  };
  board += "\n";
};

console.log(board);


(function () {
  // Console log drills
  var myButton = document.querySelector("#myButton");
  myButton.addEventListener("click", doSomething, false);

  var consoleCounter = 0;

  function doSomething(e) {
    consoleCounter++;
    console.log("Button clicked " + consoleCounter + " times!");

    if (consoleCounter > 3) {
      showMore();
    }
  }

  function showMore() {
    console.warn("This is a warning!");
    console.error("This is an error!");
  }
}());

(function () {
  var numberOfDisks = 3;

  var hanoi = function(n, a, b, c) {
    if (n > 0) {
      hanoi(n - 1, a, c, b);
      console.log("Move disk " + n + " from " + a + " to " + c + "!");
      hanoi(n - 1, b, a, c);
    }
  }
}());

(function() {
  function getMyName() {
    var nombrecito = prompt("What is your name?");
    return nombrecito;
  };

  var myName = getMyName();

  alert("Hello, " + myName);
}());
