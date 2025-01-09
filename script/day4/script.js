function myfun()
{
    let str="i love javascript";
    let res="";
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==='a')
        {
            count++;
            if(count===1)
            {
                res+=str[i];
            }
        }
        else
        {
            res+=str[i];
        }
    } 
        console.log(res);
}
myfun();