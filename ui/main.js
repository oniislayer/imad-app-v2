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

var nameip=document.getElementById('name');
var name=nameip.value;
var submit=document.getElementById('sub');
submit.onclick=function(){
    //make req
    
    //get req
    var names=['name1','name2','name3','name4','name5'];
    var list='';
    for(i=0;i<names.length;i++)
    {
        list[i]='<lis>'+names[i]+'</lis>';
    }
    var ul=getElementById('namelist');
    ul.innerHTML=list;
};
