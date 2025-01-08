function reverse()
{
    let str=document.getElementById("input1").value;
    let reversedStr=str.split('').reverse('').join('');
    document.getElementById("output").innerHTML="Reversed string: "+reversedStr;
}
