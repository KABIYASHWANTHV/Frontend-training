const arr=[2,7,10,1,15,100];
let max=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
console.log(max);