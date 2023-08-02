//Check if the given number is Armstrong number or not

function ChkArmstrong(No:number) : boolean
{
    var bflag : boolean = false
    var power : number = 0
    var iDigit : number = 0
    var No1 = No
    var temp : number = 1;
    var temp2 : number = 0;
    
    while(No1 != 0)
    {
        power++
        No1 = Math.round(No1 / 10)
    }

    No1 = No

    while(No1 != 0)
    {
        iDigit = Math.floor(No1 % 10)

        for(var i = 1; i <= power; i++)
        {
            temp = temp * iDigit
        }

        temp2 = temp2 + temp

        No1 = Math.floor(No1 / 10)

        temp = 1
    }


    if(temp2 == No)
    {
        bflag = true
    }

    return bflag

}


var No : number = 370

var ret : boolean = ChkArmstrong(No)

if(ret == true)
{
    console.log(No+" is a Armstrong number")
}
else
{
    console.log(No+" is not a Armstrong number")
}
