
//Two numbers and returns true if one number is 65 or if their sum is 65:

function number65(a,b){
    if( a==65 || b==65 || a + b == 65)
        {
            return true;
        }
    return false;
}
console.log(number65(13, 65));

//returns the area of a triangle where the lengths of three sides are 7,8,9: 

function areaOfTriangle(a,b,c){
    var s;
    var ar; 
    var r;

s= 0.5*(a + b + c);
r = (s * (s - a) * (s - b) * (s - c));
    ar = Math.sqrt(r);
     console.log(ar);
return ar
   
};
areaOfTriangle(7,8,9);console.log(time_convert(550));
 
//returns the largest of three numbers
function largestNum(num1, num2, num3){
    
    if(num1>num2 && num1>num3)
{
    return num1;
}
else if (num2>num1 && num2>num3){
    
    return num2;
}
     
     return num3;

}
console.logLargestNum(8,9,10)

//convert any number into hours and minutes
function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(72));