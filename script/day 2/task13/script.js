function vowels()
{
    let str=document.getElementById("input1").value;
    let text=str.toLowerCase();
    let count=0;
    for(let i=0;i<text.length;i++)
    {
        if(text[i]=='a' || text[i]=='e' || text[i]=='i' || text[i]=='o' || text[i]=='u')
        {
            count++;
        }
    }
    document.getElementById("output1").innerHTML="Vowel count: "+count;
}