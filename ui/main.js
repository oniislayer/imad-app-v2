console.log('Loaded!');
var e = document.getElementById('txt');
e.innerHTML="JEssie lets cook";

var i=document.getElementById('mad');

var moveright=function(){
    marginLeft=marginLeft + 10;
  i.style.marginLeft=marginLeft+'px';
};
i.onclick= function() {

    var int=setInterval(moveright,100);
};