console.log('Loaded!');
var e = document.getElementById('txt');
e.innerHTML="JEssie lets cook";

var i=document.getElementById('mad');
var marginLeft=0;
function moveright()
{
 while(marginLEft>=0)
 {
  if(marginLeft===0){
  marginLeft = marginLeft + 5;
  i.style.marginLeft = marginLeft + 'px';
  }
  if(marginLeft===100)
  {
      marginLeft = marginLeft - 5;
      i.style.marginLeft = marginLeft + 'px';
  }
 }
}
i.onclick= function(){
     var interval = setInterval(moveright,50);
};