document.onkeydown = function(event) 
{
    if (event.ctrlKey && event.shiftKey && event.key === "Q") 
    {
        alert("closing the browser window");
        window.close();
    }
};