function turncate(){
    var str = document.getElementById("str").value;
    var length = document.getElementById("str_length").value;
    var turncated = "";

    if(str.length > length){
        turncated = str.substring(0, length);
        document.getElementById("solution06").innerHTML = turncated;
    }
    else{        
        document.getElementById("solution06").innerHTML = str;
    }
}
function reset06(){
    document.getElementById("str").value = "";
    document.getElementById("str_length").value = "";
}