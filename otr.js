var start = 2;
var end = 10; 
var skip = 2;
function otr (){
    for (var i = start; i < end; i + skip){
        document.write("<p>The first number in the range is " + i + " </p>")
    }
}