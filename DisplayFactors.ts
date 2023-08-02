//Typescript program that displays factors of a number

function Factors(No : number) : void
{
    var i : number = 1
    var F : number

    for(i = 1; i <= (No / 2); i++)
    {
        if(No % i == 0)
        {
            console.log(i)
        }
    }
}

var No1 = 56

Factors(No1)
