//Find largest number of three numbers 

function MaxNumber(No1 : number, No2 : number, No3 : number) : void
{
    if(No1 > No2)
    {
        if(No1 > No3)
        {
            console.log(No1+"is the largest number")
        }
        else
        {
            console.log(No3+"is the largest number")
        }
    }
    else
    {
        if(No2 > No3)
        {
            console.log(No2+"is the largest number")
        }
        else
        {
            console.log(No3+" is the largest number")
        }
    }
}

var No1: number = 53
var No2: number = 25
var No3: number = 96

MaxNumber(No1, No2, No3)