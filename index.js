// Question 1

// find the second largest number in a given array

function Question1() {
  var input = [10, 20, 4, 45, 99];
  var array = [];
  var temp;
  var largest = 0;

  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);

    temp = input[i];
    if (temp > largest) {
      largest = temp;
      array.push(largest);
      console.log(largest);
      console.log(array);
    }
  }
  return array[array.length - 2];
}

// console.log(Question1());

// Question 2

// find the missing number in an array

function Question2() {
  var input = [1, 2, 4, 5];
  var count = 1;

  for (let i = 0; i < input.length; i++) {
    // console.log(input[i]);
    // console.log(count);

    if (input[i] != count) {
      return count;
    }
    count++;
  }
}

// console.log(Question2());

// Question 3

// find two numbers that add upto target

var input = [2, 7, 11, 15];
var target = 9;

function Question3(input, target) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] == target) {
        console.log(i, j);
      }
    }
  }
}

// console.log(Question3(input, target));

// Question 4

// move zeroes to the end

var input = [0, 1, 0, 3, 12];
var greaterThanZero = [];
var zeroes = [];
var output;

function Question4() {
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== 0) {
      greaterThanZero.push(input[i]);
    } else {
      zeroes.push(input[i]);
    }
  }

  console.log(greaterThanZero);
  console.log(zeroes);

  output = greaterThanZero + zeroes;
  return output;
}

// console.log(Question4());

// Question 5

// Question 6

// Question 7

// valid parenthesis

var input = "()[]{}";

function Question7() {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (
        input[i] == "(" &&
        input[j] == ")" &&
        input[i] == "[" &&
        input[j] == "]" &&
        input[i] == "{" &&
        input[j] == "}"
      ) {
        return true;
      }
    }
  }
}

// console.log(Question7());

// Question 8

var input1 = [1, 2, 2, 1];
var input2 = [2, 2];
var output = [];

function Question8() {
  for (let i = 0; i < input1.length; i++) {
    for (let j = 0; j < input2.length; j++) {
      if (input1[i] == input2[j]) {
        output.push(input1[i]);
        break;
      }
    }
  }
  return output;
}

console.log(Question8());

// Question 9

// Question 10



// Question 11

// reverse words in a given string

var input = "I love JavaScript";
var output = [];

function Question11(input) {
  for (let i = 0; i >= input.length; i++) {
    if (input[i] !== " ") {
      output.push[input[i]];
    }
  }

  console.log(output);
}

// console.log(Question11(input));

// Question 12

// Subarray sum equals to target

var input = [1, 2, 3, 7, 5];
var target = 12;
var output = [];

function Question12() {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = j + 1; k < input.length; k++) {
        console.log(input[i] + input[j] + input[k]);

        let sum = input[i] + input[j] + input[k];

        if (sum == target) {
          console.log(input[i], input[j], input[k]);

          output.push(input[i]);
          output.push(input[j]);
          output.push(input[k]);
        }
      }
    }
  }

  return output;
}

// console.log(Question12());

// Question 13

// find the first non repeating character

var input = "swiss";

function Question13() {
  for (let i = 0; i < input.length; i++) {
    console.log(input[i]);

    for (let j = i + 1; j < input.length; j++) {
      console.log(input[j]);

      var matched = false;

      if (input[i] == input[j]) {
        console.log("matched");
        matched = true;
        break;
      }
    }
    if (matched == false) {
      console.log(matched);
      return input[i];
    }
  }
}

// console.log(Question13());

// Question 19

// binary search

var input = [4, 5, 6, 7, 0, 1, 2];
var sorted = input.sort();
var target = 0;

function Question19() {
  var left = 0;
  var right = input.length - 1;

  while (left <= right) {
    const midIndex = Math.floor((left + right) / 2);
    console.log(midIndex, sorted[midIndex]);
    console.log(target, "target");
    console.log(left, "left", right, "right");

    if (sorted[midIndex] == target) {
      return midIndex;
    } else if (sorted[midIndex] > target) {
      right = midIndex - 1;
    } else if (sorted[midIndex] < target) {
      left = midIndex + 1;
    }
  }
  return "Target not found";
}

// console.log(Question19());
