//Check if one string is present in another string

function ChkString(str1 : string, str2 : string ) : number
{
    var No : number = str1.indexOf(str2)

    return No
}

var string1 : string = "Hello, World!"
var string2 : string = "Hello"

var ret1 : number = ChkString(string1,string2)

if(ret1 != -1)
{
    console.log("'"+string2+"' is present in string : "+string1)
}
else
{
    console.log("'"+string2+"' is not present in string : "+string1)
}