console.log('Loaded!');
('LETS PLAY THE DRAGON SLAYER GAME');
var hp=10;
var draghp=20;
var youHit=Math.floor(Math.random()*2);
var damageThisRound=Math.floor(Math.random()*9+1);
var totalDamage=0;
while(draghp>0)
{
    if(youHit==1)
    {
        console.log("You hit the dragon");
        console.log("you dealt"+" "+damageThisRound+" damage");
        totalDamage+=damageThisRound;
        if(totalDamage>=20)
        {
            console.log("You slayed the dragon,DRAGON SLAYER!!");
            
        }
        else if(0<totalDamage<20)
        {
         youHit=Math.floor(Math.random()*2);
        }
        draghp-=damageThisRound;           
    }
    else
    {
        console.log("You missed");
        hp--;
        if(hp===0)
        {
          console.log("YOU DIED");
          break;
        }
    }
    
    
}