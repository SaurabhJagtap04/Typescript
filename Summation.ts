//Find Summation of elements of array

function Summation(Arr:number[]) : number
{
    var i : number;
    var Sum : number = 0;

    for(i = 0; i < Arr.length; i++)
    {
        Sum = Sum + Arr[i]
    }

    return Sum
}

var Brr: number[] = [11,59,82,63,74,91,84,36]
var No : number = 0

No = Summation(Brr)

console.log("Summation is : "+No)