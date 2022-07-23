function myFunction(){
    var ch=document.getElementById("Choices").value;
    var a=ch.split(",");
    var r=Math.floor(Math.random()*a.length);
    var winner="🎉"+a[r]+"🎉";
    
    var element1=document.getElementById("bd");
    element1.classList.add("newbody");

    var element2=document.getElementById("main");
    element2.classList.add("star");

    var element3=document.getElementById("win");
    element3.classList.add("asd");
    element3.innerHTML=winner;

    setTimeout(function(){ 
        element1.classList.remove("newbody");
        element2.classList.remove("star");
        element3.classList.remove("asd");
        element3.classList.add("newc");
    }, 5000);
    element3.classList.remove("newc");
}