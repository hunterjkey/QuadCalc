window.onload = function() {
document.getElementById("mybutton").onclick = quadFunction;
}

	function quadFunction() {

var stringnumber = prompt("Please enter A", "Math is Rad");
var stringnumber2 = prompt("Please enter B", "Math is Rad");
var stringnumber3 = prompt("Please enter C", "Math is Rad");

var number = parseFloat(stringnumber);
var number2 = parseFloat(stringnumber2);
var number3 = parseFloat(stringnumber3);

//this is the quadratic equation for both the plus and minus
var finalplusnumber = ((-1 * number2) + Math.sqrt(Math.pow(Math.abs(number2),2) - (4*number*number3)))/(number*2)
var finalminusnumber = ((-1 * number2) - Math.sqrt(Math.pow(Math.abs(number2),2) - (4*number*number3)))/(number*2)

//this code converts the numbers to a string
var finalplusnumberS = finalplusnumber.toString();
var finalminusnumberS = finalminusnumber.toString();



//the code from this point onwards is for simplified radical form
//this code finds the part inside the square root and the denominator
var numsimpsquare = Math.pow(Math.abs(number2),2) - (4*number*number3);
var simpsquare = parseFloat(numsimpsquare);
var numdenominator = number * 2;
var denominator = parseFloat(numdenominator);

//this code makes the string
var finalPlusSimpNumber = "((-1 * " + stringnumber2 + ") + sqrt(" + simpsquare + ")) / (" + denominator + ")"; 
var finalMinusSimpNumber = "((-1 * " + stringnumber2 + ") - sqrt(" + simpsquare + ")) / (" + denominator + ")";

//this code gives the values color
var finalplusnumberc = finalplusnumberS.fontcolor("red");
var finalminusnumberc = finalminusnumberS.fontcolor("green");
var finalPlusSimpNumberc = finalPlusSimpNumber.fontcolor("red");
var finalMinusSimpNumberc = finalMinusSimpNumber.fontcolor("green");

//and this prints it out for you
    document.write(finalplusnumberc);
    document.write("<br>");
    document.write(" and ");
    document.write("<br>")
    document.write(finalminusnumberc);
    document.write("<br>")
    document.write(" are the 2 real roots of this quadratic!");
    document.write("<br>");
    document.write("<br>");
    document.write("...");
    document.write("<br>");
    document.write("<br>");
    document.write("and the roots in simplified radical form are:");
    document.write("<br>");
    document.write(finalPlusSimpNumberc);
    document.write("<br>");
    document.write("and");
    document.write("<br>");
    document.write(finalMinusSimpNumberc);
    document.write("<br>");
    document.write("<br>");
    document.write("(NOTE: 'sqrt' stands for square root)");
    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
    document.write("Thank you for visiting QuadCalc, I hope we have successfully aided you in your quadratic endeavors! If you want some more 'fun' (...), put in strings instead of numbers and look at the simplified radical form that results from it!");
}
