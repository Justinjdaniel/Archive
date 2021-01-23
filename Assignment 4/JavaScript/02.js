function frequent(){
var array1=document.getElementById("array1").value;
var maxFreq = 1;
var count = 0;
var item;
for (var i=0; i<array1.length; i++)
{
        for (var j=i; j<array1.length; j++)
        {
                if (array1[i] == array1[j])
                count++;
                if (maxFreq<count)
                {
                  maxFreq=count; 
                  item = array1[i];
                }
        }
        count=0;
}
// console.log(item +" ( " +maxFreq +" times ) ");
document.getElementById("solution02").innerHTML = "Item "+ item + " repeats "+ maxFreq + " times.";
}