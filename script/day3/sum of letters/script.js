function sumOfAsciiValues() 
{
    let str=document.getElementById("input").value;
    let sum = 0;
    for (let i = 0; i < str.length; i++) 
    {
        sum += str.charCodeAt(i);
    }
    document.getElementById("output").innerHTML=sum;
}
