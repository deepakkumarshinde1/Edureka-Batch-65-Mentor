/**
 function add(valueOne = 0, valueTwo = 0) {
  // undefined => NaN
  let result = valueOne + valueTwo;
  console.log(result);
}

// add(10, 50);

class MyClass {
  text = "hi";
  print() {
    global.setTimeout( function(){
      console.log(this);
    }, 1000);
  }
}

let myClass = new MyClass();
myClass.print();

*/

var text1 = 10; //global variable
let text2 = 30; // global variable

function printData() {
  var text3 = 40; // local var
  let text4 = 50; // local let

  console.log(text1, text2);
}
//printData();
//console.log(text3, text4);

function printFor() {
  for (let index = 0; index < 1; index++) {
    //   console.log("loop");
  }
  // console.log(index); // 1 or 2 or  undefined or error
}

printFor();

for (let i = 100; i >= 3; i++) {
  i -= 3;
  // console.log(i);
}
let arrayOne = [1, "a", true, null, function () {}, {}, [1, 2, 3]];
console.log(arrayOne);

// for (let i = 100; i > 0; i -= 3) {
//   console.log(i);
// }

console.log({ name: "Edureka", name: "Deepak" });

async function abc() {
  return 1;
}
