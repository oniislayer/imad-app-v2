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
                    span.innerHTML = counter.toString();
                }
            }
        };
        
        request.open('GET','http://oniislayer.imad.hasura-app.io/counter',true);
        request.send(null);

};


var submit=document.getElementById('sub');
submit.onclick=function(){
    //make req
    var request = new XMLHttpRequest();
    
    //capture req
  request.onreadystatechange=function()
  {
            if(request.readyState===XMLHttpRequest.DONE){
                if(request.Status===200){
    
                //get req
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for(i=0;i<names.length;i++)
                {
                    list += '<lis>' + names[i] + '</lis>';
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
                }
           }
 };
        var nameip=document.getElementById('name');
        var name=nameip.value;
        request.open('GET','http://oniislayer.imad.hasura-app.io/submitname?name='+ name, true);
        request.send(null);
};
