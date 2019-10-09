// Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”. For numbers which
// are multiples of both three and five print “FizzBuzz”.

let i: number = 1;
let max: number = 16;  // Just go to 16

while (i < max) {
    let line: string = "";
    if (i % 3 === 0) {
        line += "Fizz";
    }
    if (i % 5 === 0) {
        line += "Buzz";
    }
    if (! ((i % 3 === 0) || (i % 5 === 0))) {
        line += i.toString();
    }
    console.log(line);
    i++;
}