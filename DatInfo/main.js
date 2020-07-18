function getData()
{
    var var1="";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var1 = JSON.parse(this.responseText);
            document.getElementById('input1').value = var1.result.rank;
            document.getElementById('input2').value = Number(var1.main.temp_min);
            document.getElementById('input3').value = Number(var1.main.temp_max);
            document.getElementById('input4').value = var1.result.rank;
            document.getElementById('input5').value = '100';
            document.getElementById('input6').value = var1.wind.speed;
        }
    };

    var s=document.getElementById('username1').value;
    xhttp.open("GET", "https://codeforces.com/api/user.rating?handle"+s, true);
    xhttp.send();
}