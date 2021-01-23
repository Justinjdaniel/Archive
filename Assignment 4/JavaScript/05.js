function OddEven(){
    var print="";
for (var x=0; x<=15; x++) {
    if (x === 0) {
        print = x + " is Even <br>";
    }
    else if (x % 2 === 0) {
        print += x + " is Even <br>";
    }
    else {
        print += x + " is Odd <br>";
    }
    }
    // console.log(print);
    document.getElementById("solution05").innerHTML = print;
}