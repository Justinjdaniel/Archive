function star_triangle(){
    var i;
    var j;
    var x = "";
    var y = "";

    for(i=1; i <= 4; i++)
    {
        for(j=1; j<=i; j++)
        {
            x += " * ";
        }
    // console.log(x+'<br/>');
    y += x + "<br>"
    x = "";
    document.getElementById("solution10").innerHTML = y;
    }
}