function isTouching(w,z){
    if(w.x-z.x<w.width/2+z.width/2&&z.x-w.x<z.width/2+w.width/2&&w.y-z.y<w.height/2+z.height/2&&z.y-w.y<z.height/2+w.height/2){
      w.shapeColor="blue";
      z.shapeColor="blue";
     }
     else{
      w.shapeColor="red";
      z.shapeColor="red"; 
     }
  
  }