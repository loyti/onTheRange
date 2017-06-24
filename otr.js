var start = 2;
var end = 10; 
var skip = 2;
var range = [start];
function otr (){
    document.write("<h1>Having fun printing values and skipping numbers</h1>");
    for (var i = 0; i < ((end / skip) - 1); i++){
        start  += skip;
        range.push(start);
        document.write("<p>The next number in the range is " + range[i] + " </p>");
    }
    return "<p class=\"otr\">This is the " + range + "</p";
}
otr();