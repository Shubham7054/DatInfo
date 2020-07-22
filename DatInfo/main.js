function getData()
{
    var var1="";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var1 = JSON.parse(this.responseText);

            var len=var1.result.length;
            var mx=0;

            for(let i=0;i<len;i++)
            {
                var x=var1.result[i].newRating;
                if(x>mx)
                mx=x;
            }
            var bestRank=100000;
            for(let i=0;i<len;i++)
            {
                var x=var1.result[i].rank;
                if(x<bestRank)
                bestRank=x;
            }
            var hr =-100000;
            var s="";

            for(let i=1;i<len;i++)
            {
                var x=var1.result[i].newRating;
                var y=var1.result[i].oldRating;
                if(x-y>hr)
                {
                    hr=x-y;
                    s=var1.result[i].contestName;
                }
            }


            document.getElementById("testing").innerHTML = "Scroll Down To View Result";


            document.getElementById('input1').value = var1.result[len-1].newRating;
            document.getElementById('input2').value = mx;
            document.getElementById('input3').value = bestRank;
            document.getElementById('input4').value = len;
            document.getElementById('input500').value = hr;
            document.getElementById('input6').value = s;
        }
        
    };

    var s=document.getElementById('username1').value;
    xhttp.open("GET", "https://codeforces.com/api/user.rating?handle="+s, true);
    xhttp.send();



    var var2="";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var2 = JSON.parse(this.responseText);
            var l=var2.result.length;

            


            //document.getElementById("testing").innerHTML = "Scroll Down To View Result";


            document.getElementById('input7').value = var2.result[0].country;
            document.getElementById('input8').value = var2.result[0].maxRank;
            document.getElementById('input9').value = var2.result[0].friendOfCount;
        }
        
    };

    //var s=document.getElementById('username1').value;
    xhttp.open("GET", "https://codeforces.com/api/user.info?handles="+s, true);
    xhttp.send();
}