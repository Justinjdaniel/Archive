function sum_sq(){
    var sum_sq = document.getElementById("sum-sq-array").value;
    var array = Array.from(String(sum_sq), Number);
    var sum = 0,
        i = array.length;
    while (i--) {
        sum += (array[i]*array[i]);
    }
// console.log(sum)
    document.getElementById("solution04").innerHTML = "Sum of Square of each elements is "+sum;
}