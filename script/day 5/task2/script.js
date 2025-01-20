document.onkeydown = function(event) 
{
    if (event.ctrlKey && event.key === "s") 
    {
        alert("Ctrl+S is disabled on this page");
    }
}