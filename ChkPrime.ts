//Typescript program that checks if a number is Prime

function ChkPrime(No : number) : boolean
{
    var i : number;
    var bflag : boolean = true

    for(i = 2; i <= (No / 2); i++)
    {
        if(No % i == 0)
        {
            bflag = false;
        }
    }

    return bflag
}

var No1 = 17
var bRet : boolean = false

bRet = ChkPrime(No1)

if(bRet == true)
{
    console.log(No1+" is a Prime Number")
}
else
{
    console.log(No1+" is not a Prime Number")
}
