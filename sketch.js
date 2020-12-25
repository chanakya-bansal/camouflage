var timer
var q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,score,GS,dv,button,hit
var win,lose,buffer,image

function preload(){
  
  button=loadSound("zapsplat_multimedia_game_sound_digital_high_pitched_generic_tone_001_55831.mp3")
  hit=loadSound("zapsplat_multimedia_game_sound_plink_positive_wooden_001_60429.mp3")
  win=loadSound("zapsplat_multimedia_game_tone_short_positive_bonus_win_glide_synth_001_51329.mp3")
  lose=loadSound("zapsplat_multimedia_game_sound_fun_arcade_organ_short_negative_fail_lose_001_54274.mp3")
  image=loadImage("IMG_0589.JPG")
  
}


function setup() {
  createCanvas(500,500);
  timer=120
   buffer=1
  q=createSprite(100,100,30,30)
  w=createSprite(200,100,30,30)
  e=createSprite(300,100,30,30)
  r=createSprite(400,100,30,30)
  t=createSprite(100,200,30,30)
  y=createSprite(200,200,30,30)
  u=createSprite(300,200,30,30)
  i=createSprite(400,200,30,30)
  o=createSprite(100,200,30,30)
  p=createSprite(200,200,30,30)
  a=createSprite(300,200,30,30)
  s=createSprite(400,200,30,30)
  d=createSprite(100,300,30,30)
  f=createSprite(200,300,30,30)
  g=createSprite(300,300,30,30)
  h=createSprite(400,300,30,30)
  j=createSprite(100,400,30,30)
  k=createSprite(200,400,30,30)
  l=createSprite(300,400,30,30)
  z=createSprite(400,400,30,30)
  score=0
  GS="start"
  dv=90
  
}

function draw() {
 // background(200);
   textFont('Georgia')
  textSize(20)
if(GS==="play"){
  if(frameCount%dv===0){
    timer=timer-1
  }
  switch(f.width){
    case 30:dv=90
      break;
    case 42:dv=60
      break;
    case 50:dv=30
      break;
    case 60:dv=15
      break;
    default:break   
  }

  
  
 // console.log(dv)
  
  
 // console.log(timer)
  if(timer%2==0){
    background(200)
    q.shapeColor=0,0,0
     w.shapeColor=0,0,0
     e.shapeColor=0,0,0
     r.shapeColor=0,0,0
     t.shapeColor=0,0,0
     y.shapeColor=0,0,0
     u.shapeColor=0,0,0
     i.shapeColor=0,0,0
     o.shapeColor=0,0,0
     p.shapeColor=0,0,0
     a.shapeColor=0,0,0
     s.shapeColor=0,0,0
     d.shapeColor=0,0,0
     f.shapeColor=0,0,0
     g.shapeColor=0,0,0
     h.shapeColor=0,0,0
     j.shapeColor=0,0,0
     k.shapeColor=0,0,0
     l.shapeColor=0,0,0
     z.shapeColor=0,0,0
     fill(0,0,0)
  }
  else{
    background(0,0,0)
    q.shapeColor=200
    w.shapeColor=200
    e.shapeColor=200
    r.shapeColor=200
    t.shapeColor=200
    y.shapeColor=200
    u.shapeColor=200
    i.shapeColor=200
    o.shapeColor=200
    p.shapeColor=200
    a.shapeColor=200
    s.shapeColor=200
    d.shapeColor=200
    f.shapeColor=200
    g.shapeColor=200
    h.shapeColor=200
    j.shapeColor=200
    k.shapeColor=200
    l.shapeColor=200
    z.shapeColor=200
    fill(200,200,200)
 
  }
  
  if(keyCode===87 || keyCode===38){
    f.velocityY=-4
    f.velocityX=0
  }
  if(keyCode===83 || keyCode===40){
    f.velocityY=4
    f.velocityX=0
  }
  if(keyCode===65 || keyCode===37){
    f.velocityX=-4
    f.velocityY=0
  }
  if(keyCode===68 || keyCode===39){
    f.velocityX=4
    f.velocityY=0
  }
  
  
  camera.position.x=f.x
  camera.position.y=f.y
  
 
if(f.shapeColor===0){ 
  if(f.isTouching(q)){
     f.visible=false
    f=createSprite(q.x,q.y,f.width+2,f.height+2)
    q.remove()
    score=score+10
    hit.play()
  }
   if(f.isTouching(w)){
     f.visible=false
    f=createSprite(w.x,w.y,f.width+2,f.height+2)
    w.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(e)){
     f.visible=false
    f=createSprite(e.x,e.y,f.width+2,f.height+2)
    e.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(r)){
     f.visible=false
    f=createSprite(r.x,r.y,f.width+2,f.height+2)
    r.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(t)){
     f.visible=false
    f=createSprite(t.x,t.y,f.width+2,f.height+2)
    t.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(y)){
     f.visible=false
    f=createSprite(y.x,y.y,f.width+2,f.height+2)
    y.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(u)){
     f.visible=false
    f=createSprite(u.x,u.y,f.width+2,f.height+2)
    u.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(i)){
     f.visible=false
    f=createSprite(i.x,i.y,f.width+2,f.height+2)
    i.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(o)){
     f.visible=false
    f=createSprite(o.x,o.y,f.width+2,f.height+2)
    o.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(p)){
     f.visible=false
    f=createSprite(p.x,p.y,f.width+2,f.height+2)
    p.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(a)){
     f.visible=false
    f=createSprite(a.x,a.y,f.width+2,f.height+2)
    a.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(s)){
     f.visible=false
    f=createSprite(s.x,s.y,f.width+2,f.height+2)
    s.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(d)){
     f.visible=false
    f=createSprite(d.x,d.y,f.width+2,f.height+2)
    d.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(g)){
     f.visible=false
    f=createSprite(g.x,g.y,f.width+2,f.height+2)
    g.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(h)){
     f.visible=false
    f=createSprite(h.x,h.y,f.width+2,f.height+2)
    h.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(j)){
     f.visible=false
    f=createSprite(j.x,j.y,f.width+2,f.height+2)
    j.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(k)){
     f.visible=false
    f=createSprite(k.x,k.y,f.width+2,f.height+2)
    k.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(l)){
     f.visible=false
    f=createSprite(l.x,l.y,f.width+2,f.height+2)
    l.remove()
       score=score+10
      hit.play()
  }
   if(f.isTouching(z)){
     f.visible=false
    f=createSprite(z.x,z.y,f.width+2,f.height+2)
    z.remove()
       score=score+10
      hit.play()
  }
}

  if(score==190){
    score=200
  }
  
  
 if(f.shapeColor===200){
   if(f.isTouching(q) ||f.isTouching(w) ||f.isTouching(e) ||f.isTouching(r) ||f.isTouching(t) ||f.isTouching(y) ||f.isTouching(u) ||f.isTouching(i) ||f.isTouching(o) ||f.isTouching(p) ||f.isTouching(a) ||f.isTouching(s) ||f.isTouching(d) ||f.isTouching(g) ||f.isTouching(h) ||f.isTouching(j) ||f.isTouching(k) ||f.isTouching(l) ||f.isTouching(z) ){
     f.x=1000
     f.remove()
     
   }
   
 }
text("score: "+score,camera.position.x-230,camera.position.y-230)
   if(score>=200){
     if(buffer>-1){
      if(frameCount%15===0){
        buffer=buffer-1
      }
      if(buffer>0){
      win.play()
      }
     }
       camera.position.x=250
     camera.position.y=250
     f.y=250
     f.x=250
      textSize(40)
      fill(255,170,21)
      text("you win",camera.position.x-90,camera.position.y)
      text("press enter to replay",camera.position.x-190,camera.position.y+100)
      if(keyCode===13){
        GS="start"
         reset()
      }
    
    }
    
    if(f.x===1000){
      if(buffer>-1){
      if(frameCount%15===0){
        buffer=buffer-1
      }
      if(buffer>0){
      lose.play()
      }
      }
    //  console.log(buffer)
      camera.position.x=250
      textSize(40)
      fill(255,170,21)
      text("you lose",camera.position.x-90,camera.position.y)
      text("press enter to retry",camera.position.x-190,camera.position.y+100)
      text("your score:"+score,camera.position.x-90,camera.position.y+200)
      if(keyCode===13){
        GS="start"
        reset()
        button.play()
      }
    }
    


}  
  
  if(GS==="start"){
    background(0)
    fill(200)
    textSize(40)
    text("CAMOUFLAGE",100,100)
    textSize(30)
    text("click space to play",130,400)
    text("click shift for instructions",100,200)
    if(keyCode===32){
        button.play()
      GS="play"
    }
      if(keyCode===16){
          button.play()
        GS="instruct"
      }
    
    
  }
    
    if(GS==="instruct"){
       background(0)
    fill(200)
      textSize(40)
      text("INSTRUCTIONS",100,100)
      textSize(25)
      text("~ controls are WSAD as well as ARROWS .",25,200)
      text("~ you grow by eating other boxes.",25,250)
      text("~ you can only eat boxes when the ",25,300)
      text("     background is white, otherwise",25,350)
      text("     you will die",25,400)
      textSize(40)
      text("GOOD LUCK ",100,450)
      textSize(10)
      text("click escape to go back",20,20)
      text("press C to see the creator",200,20)
      if(keyCode===27){
          button.play()
        GS="start"
      }
      if(keyCode===67){
        GS="creator"
      }
    }
  if(GS==="creator"){
    background(image)
    text("press backspace to go back",20,20)
    if(keyCode===8){
      GS="instruct"
      background(0,0,0)
    }
  }
  
 //  console.log(GS)
    
  
    
    //console.log(timer)
    
    
  
// console.log(camera.position.x)
  
  
  
  if(GS==="play"){
   drawSprites()
  }

}





function reset(){
  q.remove()
   w.remove()
   e.remove()
   r.remove()
   t.remove()
   y.remove()
   u.remove()
   i.remove()
   o.remove()
   p.remove()
   a.remove()
   s.remove()
   d.remove()
   f.remove()
   g.remove()
   h.remove()
   j.remove()
   k.remove()
   l.remove()
   z.remove()
   q.remove()
   q.remove()
   q.remove()
   q.remove()
   q.remove()
   q.remove()
   q.remove()
   q.remove()

 timer=120
   buffer=1
  q=createSprite(100,100,30,30)
  w=createSprite(200,100,30,30)
  e=createSprite(300,100,30,30)
  r=createSprite(400,100,30,30)
  t=createSprite(100,200,30,30)
  y=createSprite(200,200,30,30)
  u=createSprite(300,200,30,30)
  i=createSprite(400,200,30,30)
  o=createSprite(100,200,30,30)
  p=createSprite(200,200,30,30)
  a=createSprite(300,200,30,30)
  s=createSprite(400,200,30,30)
  d=createSprite(100,300,30,30)
  f=createSprite(200,300,30,30)
  g=createSprite(300,300,30,30)
  h=createSprite(400,300,30,30)
  j=createSprite(100,400,30,30)
  k=createSprite(200,400,30,30)
  l=createSprite(300,400,30,30)
  z=createSprite(400,400,30,30)
  score=0
  GS="start"
  dv=90
  camera.position.x=250
  camera.position.y=250
  
}
    