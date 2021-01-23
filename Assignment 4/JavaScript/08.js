var x = 0;
var array = Array();

function add(){
    array[x] = document.getElementById("object").value;
    document.getElementById("add").innerHTML = "Object : " + array[x] + " added ";
    x++;
    document.getElementById("object").value = "";
}

function display(){
    var display = "";

    for(index in array){
        display += array[index] + ", ";
    }
    document.getElementById("display").innerHTML = "<hr> Objects added are <br>" + display + ".";
}

function object_sort(){
    array.sort();
    // console.log(array);
    document.getElementById("solution08").innerHTML = "<hr>" + array;
}
