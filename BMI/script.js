// type your javascript code below

function calculate(){
    var x = document.getElementById("kg").value;
    var y = document.getElementById("hg").value;
    
    var result = x/(y*y);
    
    if (result < 18.5){
      var status = "Underweight";
    }
   else if (18.5<=result<25){
      var status = "Healthy Weight";    
    }
   else if (25<=result<30){
     var ststus = "over Weight";
   }
    else if (result<=30){
      var status = "Obese";
    } 
    var text = document.getElementById("txtchgr");
    text.innerText= "Your BMI is "+result+" kg/m²";
    var condition = document.getElementById("stat");
    condition.innerText="You have "+ status;
  }
  
  
  
  
  
  
  
  
  
  
  
  //Type your javascrit code above 