//Find second maximum number from array

function SecMax(Arr:number[]) : number
{
    var i : number;
    var max : number = 0;
    var smax : number = 0;

    for(i = 0; i < Arr.length; i++)
    {
        if(Arr[i]>max)
        {   
            smax = max;                    
            max = Arr[i];                       
        
        }
        else if(Arr[i]>smax)
        {
            smax = Arr[i]
        }
    }
    return smax
}

var Brr: number[] = [90,59,82,63,74,91,89,36]
var No : number = 0

No = SecMax(Brr)

console.log("Second Maximum element is : "+No)