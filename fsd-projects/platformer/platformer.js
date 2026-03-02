$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "pink"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200, 370, 90, 29,  "pink");
createPlatform(400, 300, 100, 40, "pink");
createPlatform(200700,50,23,  "pink");
createPlatform(100,620,100,20,  "pink");
createPlatform(700,370,90,20,  "pink");
createPlatform (300,500,400,30, "ypink");
createPlatform(640, 190, 900, 20, "pink"); // bright green for a finished platform


    // TODO 3 - Create Collectables
createCollectable("diamond", 700, 350, 0.5, 0.7);
createCollectable("max", 1200,170,0.2,0.7);
createCollectable("kennedi", 90,150,0.2,0.7);

    
    // TODO 4 - Create Cannons

createCannon("top", 200, 1200);
createCannon("right", 300, 1100);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
