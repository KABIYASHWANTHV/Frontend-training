function checkPalindrome()
{
    let str=document.getElementById("input1").value;
    let reversedstr=str.split('').reverse('').join('');
    let txt;
    if(str==reversedstr)
    {
        txt="The string is a palindrome.";
    }
    else
    {
        txt="The string is not a palindrome.";
    }
    document.getElementById("output").innerHTML=txt;
}