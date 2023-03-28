function lovecalc(){
    var value1=document.getElementById("name1").value;
    var value2=document.getElementById("name2").value;
    if(value1.length<=2){
        alert("Please provide atleast 3 characters");
        
    }
    if(value2.length<=2){
        alert("Please provide atleast 3 characters");
    }
    else{
        var random=Math.floor(Math.random()*100)
        document.getElementById("final").innerHTML="The 💖 percentage between "+value1+" and "+value2+" is "+random+"%";
    }
    if(random<=50){
        document.getElementById("output").innerHTML="Good Relationship";
    }
    else{
        document.getElementById("output").innerHTML="Excellent Relationship";
    }
    if(value1==="gladson"||value2==="alan jose"||value1==="rijo"||value1==="gregan"||value1==="alan jose"){
        document.getElementById("output").innerHTML="Gay Couples";
    }
   
}
