function frequency()
{
    let str=document.getElementById("input1").value;
    let str1=document.getElementById("input2").value;
    let count=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==str1)
        {
            count++
        }
    }
    document.getElementById("output").innerHTML=count;
}