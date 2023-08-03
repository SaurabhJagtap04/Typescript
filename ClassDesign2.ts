/*

Typescript application which contains one class named as Circle.

Circle class contains two characteristics (Class data members) as Radius, PIL.

Create one parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.

In Circle class we have to one method (Behaviours) as Area which will return area of Circle.
After designing the class create two objects of that class by providing some hardcoded value
Call the method Area by using both the objects.


*/

class Circle
{
    radius : number;
    PI : number;

    constructor(rad : number)
    {
        this.radius = rad
        this.PI = 3.14      
    }

    Area()
    {
        return this.radius * this.radius * this.PI
    }
}

var obj = new Circle(12)

var ret = obj.Area()
console.log("Area is : "+ret)