var fruits = ["apple", "banana", "pie"];

// for (var i = fruits.length - 1; i >= 0; i--) {
// 	console.log(fruits[i])
// };

// var numbers = [1]

// for (var i = 0; numbers.length > i; i++){
// 	console.log(String(numbers[i]));
// }

// var bank_balance = 302.13;
// var amount = 99.99;

// var idChecked = true;

// if (amount > bank_balance || idChecked){
//      console.log("I want to buy this phone");
// };


var returnName = function(){
	var name = "doug";
	console.log(name);
}

var doNot = function(){
	console.log(name);
}
doNot();

function one(){
     var a = 1; 
     console.log(a);
     a = 1;
}

function two(){
     var a = 2; 
     console.log(a);
     one();
     
}
two();

var hideIt = function(){

}

var hello = "doug"

var callIt = function(){
	console.log(hello)
};
callIt();



var check

