/**

Typescript application which contains one class named as CircleX which 
inherits Circle class.

Circle class contains two characteristics (Class data members) as Radius, PIL.

One parametrised constructor which accept one value and assign it to Radius. Value of
PI member is set to 3.14.

In Circle class we have to one method (Behaviours) as Area which will return area of Circle.

In CircleX class we have to write one method (Behaviours) as Circumference which will return
circumference of circle.

After designing the class create two objects of that class by providing some hardcoded value.
Call Circumference and Area methods by using both the objects.

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

class CircleX extends Circle
{
    radius : number;

    constructor(rad : number)
    {
        super(rad)
    }

    Circumference()
    {
        return 2 * this.PI * this.radius
    }

}

var obj1 = new Circle(10)

var ret1 = obj1.Area()
console.log("Area is : "+ret1)

var obj2 = new CircleX(10)

var ret2 = obj2.Circumference()
console.log("Circumference is : "+ret2)
