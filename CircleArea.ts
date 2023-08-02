//Program contains function named as Area that calculates area of a circle
//Accepts radius from circle & return its area
//Default value of PI should be 3.14 if not provided by user

function Area(radius : number, PI?: number) : number
{
    var area : number;

    if(PI == undefined)
    {
        PI = 3.14
    }

    area = radius * radius * PI

    return area
}

var Ans:number;

Ans = Area(10)
console.log("Area is : "+Ans)

Ans = Area(10, 3.55)
console.log("Area is : "+Ans)



