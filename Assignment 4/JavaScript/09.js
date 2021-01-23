function triangle(){
    let str = 'Javascript';
    var x = "";
    var y = "";

    for (let char of str) {
    x += char;
    y += x + "<br>";
    // console.log(y);
    document.getElementById("solution09").innerHTML = y;
    }
}