var operator = prompt("Welcome! Please select operator: +,/,*,-");
var firstNum = prompt("Enter the first number below");
var secondNum = prompt("Enter the second number below");

if (operator == "+"){
    alert("The result is " + ((Number(firstNum)) + (Number(secondNum))));
 
}else if(operator == "-"){
    alert("The result is " ((Number(firstNum)) - (Number(secondNum))));

 }else if(operator == "*"){
    alert("The result is " ((Number(firstNum)) * (Number(secondNum))));

 }else if(operator == "/"){
    alert("The result is " ((Number(firstNum)) / (Number(secondNum))));

 }else {
    alert("There seems to have been a problem, please try again.")
 }
