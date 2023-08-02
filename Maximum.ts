//Find Maximum number from given array

function Maximum(Arr:number[]) : number
{
    var i : number;
    var max : number = 0;

    for(i = 0; i < Arr.length; i++)
    {
        if(Arr[i] > max)
        {
            max = Arr[i]
        }
    }

    return max
}

var Brr: number[] = [11,59,82,63,74,91,84,36]
var No : number = 0

No = Maximum(Brr)

console.log("Maximum number is : "+No)