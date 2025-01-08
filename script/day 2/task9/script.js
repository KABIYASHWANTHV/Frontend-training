function confirmbox() 
{
    var txt;
    if (confirm("Press a button!")) 
    {
      txt="You chose to continue!";
    } else 
    {
      txt="You canceled!";
    }
    document.getElementById("demo").innerHTML=txt;
}