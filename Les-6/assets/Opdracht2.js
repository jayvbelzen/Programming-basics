countdown();


function countdown() 
{
    
    for(i = 10; i >= 0; i--)
    {
        if(i > 0)
        {
            console.log(i);
        }
            
        else if(i == 0)
        {
            var year = new Date().getFullYear();
            console.log("Happy " + year);
        }
    }
}