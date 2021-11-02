function compute()
{
    var p = document.getElementById("principal").value;
    var r = document.getElementById("rate").value;
    var t = document.getElementById("years").value;
    var final = document.getElementById("report");
    var a = document.getElementById("deposit");
    var b = document.getElementById("interestRate");
    var c = document.getElementById("finalresult");
    var d = document.getElementById("year");
    var time = new Date().getFullYear();
        
  
    time = time + +t;
    let interest = ((p*r*t) / 100);
       
    a.innerHTML = " " + p;
    b.innerHTML = " " + r;
    c.innerHTML = " " + interest;
    d.innerHTML = " " + time;  
    
    final.style.visibility ="visible";
        
    
   
}
