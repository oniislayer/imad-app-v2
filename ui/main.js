console.log('Loaded!');


//counter prgm

var c= document.getElementById('counter');

c.onclick=function()
{
        var request = new XMLHttpRequest();
        
        request.onreadystatechange=function(){
            if(request.readyState===XMLHttpRequest.DONE){
                if(request.Status===200)
                {
                    var counter =request.responseText;
                    var span=document.getElementById('count');
                    counter=counter + 1;
                    span.innerHTML = counter.toString();
                }
            }
        };
        
        request.open('GET','http://oniislayer.imad.hasura-app.io/counter',true);
        request.send(null);

};

    
