//Accept one number and print Fibonacci series till that number
//Input : 21
//Output : 1    1   2   3   5   8   13  21

function Fibonacci(No : number) : void
{
    var a : number = 1;
    var b : number = 0;
    var c : number = 0;

    do
    {
        c = b + a         
        b = a
        a = c
        
        console.log(c)
    } while(c < No);
}

var No = 21

Fibonacci(No)

