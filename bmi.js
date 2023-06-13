function keisan(){ 
  var a, b,d;
  a = document.getElementById("shincho").value; 
  b = document.getElementById("taijuu").value;
  
  c = b/( (a/100)*(a/100) ); 

 if(c >= 25){ 
   document.getElementById("kuuran").textContent = "肥満型"; }
  else if(c < 25 && c >= 18){ 
   document.getElementById("kuuran").textContent = "標準型"; }
  else{ 
    
document.getElementById("kuuran").textContent = "瘦せ型";}
 }
