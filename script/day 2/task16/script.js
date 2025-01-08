function replaceword()
{
    let str=document.getElementById("input1").value;
    let str1=document.getElementById("input2").value;
    let str2=document.getElementById("input3").value;
    let str3=str.replace(str1,str2);
    document.getElementById("newword").innerHTML=str3;
}