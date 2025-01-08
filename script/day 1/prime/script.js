let num=7;
// 0 and 1 are not prime and not composite number
for(let i=2;i<num;i++)
{
    if(num%i==0)
    {
        console.log("not prime");
        break;
    }
    else
    {
        console.log("prime");
        break;
    }
}
