function asciisum()
{
    const str=document.getElementById("input").value;
    let sum=0;
    for(let i=0;i<str.length;i++)
    {
        sum+=str.charCodeAt(i);
    }
    document.getElementById("result").innerHTML="Sum of asci values : "+sum;
}