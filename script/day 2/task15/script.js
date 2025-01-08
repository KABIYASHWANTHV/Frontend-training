function Initial()
{
    let str=document.getElementById("input1").value;
    let str1=str.split(" ");
    let initial=str1[0][0].toUpperCase()+"."+str1[1][0].toUpperCase();
    document.getElementById("output").innerHTML=initial;
}