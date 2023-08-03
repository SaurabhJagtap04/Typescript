/**
    Typescript application which contains one class named as Arithmetic.
Arithmetic class contains three characteristics (Class data members) as Numberl, Number2,
Create one parametrised constructor which accept two values and assign it to Number and
Number2.

In Arithmetic class we have to write four methods (Behaviours) as Addition, Subtraction ,
Multiplication and Division.

Addition method will add Numberl , Number2 & return result.

Subtraction method will subtract Numberl , Number2 & return result.

Multiplication method will multiply Number1 , Number2 & return result

Division method will divide Numberl , Number2 & return result.

After designing the class create two objects of that class by providing some hardcoded value
Call all the methods by using both the objects.

*/

class Arithimatic
{
    No1 : number
    No2 : number;

    constructor(ino1 : number, ino2 : number)
    {
        this.No1 = ino1
        this.No2 = ino2
    }

    Addition() : number
    {     
        return this.No1 + this.No2
    }

    Substraction() : number
    {     
        return this.No1 - this.No2
    }

    Multiplication() : number
    {     
        return this.No1 * this.No2
    }

    Division() : number
    {     
        return this.No1 / this.No2
    }

}

var obj = new Arithimatic(20,5);

var ret : number = obj.Addition();
console.log("Addition is "+ret)

var ret : number = obj.Substraction();
console.log("Substraction is "+ret)

var ret : number = obj.Multiplication();
console.log("Multiplication is "+ret)

var ret : number = obj.Division();
console.log("Division is "+ret)

