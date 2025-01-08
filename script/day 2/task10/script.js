function promptbox()
{
    let num=prompt("Please enter your age");
    var txt;
    if(num>=18)
    {
        txt="You are eligible!";
    }
    else
    {
        txt="You are not eligible!";
    }
    document.getElementById("demo").innerHTML=txt;
}