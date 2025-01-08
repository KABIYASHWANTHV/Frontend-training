let num=12345;
let count=0;
while(num>0)
{
    let rem=num%10;
    count++
    num=Math.floor(num/10);
}
console.log(count);