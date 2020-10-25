var inp=new Array();
        inp[0]=new Array();
        inp[0]["A"]=".-";
        inp[0]["B"]="-...";
        inp[0]["C"]="-.-.";
        inp[0]["D"]="-..";
        inp[0]["E"]=".";
        inp[0]["F"]="..-.";
        inp[0]["G"]="--.";
        inp[0]["H"]="....";
        inp[0]["I"]="..";
        inp[0]["J"]=".---";
        inp[0]["K"]="-.-";
        inp[0]["L"]=".-..";
        inp[0]["M"]="--";
        inp[0]["N"]="-.";
        inp[0]["O"]="---";
        inp[0]["P"]=".--.";
        inp[0]["Q"]="--.-";
        inp[0]["R"]=".-.";
        inp[0]["S"]="...";
        inp[0]["T"]="-";
        inp[0]["U"]="..-";
        inp[0]["V"]="...-";
        inp[0]["W"]=".--";
        inp[0]["X"]="-..-";
        inp[0]["Y"]="-.--";
        inp[0]["Z"]="--..";
        inp[0]["0"]="-----";
        inp[0]["1"]=".----";
        inp[0]["2"]="..---";
        inp[0]["3"]="...--";
        inp[0]["4"]="....-";
        inp[0]["5"]=".....";
        inp[0]["6"]="-....";
        inp[0]["7"]="--...";
        inp[0]["8"]="---..";
        inp[0]["9"]="----.";
        inp[0]["."]=".-.-.-";
        inp[0][","]="--..--";
        inp[0]["?"]="..--..";

function decode(expr) {
    // write your solution here
    function textToMorse(t)
{
    var l=expr.length;
    var val=""
    var c="";
    var s="";
    var ss;
    var ss="";
    expr=expr.toUpperCase();
    l=expr.length;
    for (var i=0; i<l; i++)
    {
        c=expr.slice(i, i+1);
        if (c==" ")
        {
            ss+="   "
        }
        else
        {
            ss+=inp[0][c] + " ";
        }
    }
    return (ss);
}


}


module.exports = {
    decode
}