console.log('Loaded!');


//counter prgm

var c= document.getElementById('counter');
var counter=0;
c.onclick = function(){
    //render the count
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML = counter.toString();
    
}