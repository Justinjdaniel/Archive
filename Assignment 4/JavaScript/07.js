function findLarge(){
    var int1 = document.getElementById("integer1").value;
    var int2 = document.getElementById("integer2").value;
    var larger = int1 && int2;

    if(larger && int1 === int2){
        document.getElementById("solution07").innerHTML = "Both numbers are equal!";
    }
    else if(larger){
        document.getElementById("solution07").innerHTML = "The larger number is " + Math.max(int1,int2);
    }
    else{
        document.getElementById("solution07").innerHTML = "Please add an integer!";
    }
}
function reset07(){
    document.getElementById("integer1").value = "";
    document.getElementById("integer2").value = "";
    }