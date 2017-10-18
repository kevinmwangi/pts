(function(){
  // Pts.namespace( this ); // add Pts into scope if needed
  
  var demoID = "pt_create";
  
  // create Space and Form
  var space = new CanvasSpace("#"+demoID).setup({ retina: true, bgcolor: "#e2e6ef", resize: true });
  var form = space.getForm();
  
  // animation
  space.add( (time, ftime) => {
    
    // space.pointer stores the last mouse or touch position
    let m = space.pointer;
    
    // drawing
    form.strokeOnly("#123", 5).line( [new Pt( m.x, 0), m, new Pt( 0, m.y)] );
    form.stroke("#f03").line( [new Pt(0,0), m] );
    form.stroke("#fff", 5).fill("#f03").point( m, 10, "circle")
    form.fill("#123").font(14, "bold").text( m.$add(20, 5), m.toString() );
    
  });
  
  // start
  space.playOnce(200).bindMouse().bindTouch();
  
  // For use in demo page only
  if (window.registerDemo) window.registerDemo(demoID, space);
  
})();