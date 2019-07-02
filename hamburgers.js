
<html>
  <head>
  <link href="https://fonts.googleapis.com/css?family=Lato:300&display=swap" rel="stylesheet">
  <link href="aos.css" rel="stylesheet">
  <script src="aos.js"></script>
  <link rel="stylesheet" href="index.css">
  <link href="hamburgers.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="index.js" defer></script>
  <title>Paul Beltran</title>
  <script>
  AOS.init();
</script>
  </head>

  <body>


  <div id="top">
    <canvas id=circles></canvas>
  <h1>Paul Beltran</h1>

  <button id="goButton" onclick="scrollAboutMe()">View Projects</button>

  </div>
<div id="aboutMe" class="page">
  <h2 data-aos="zoom-in">About Me</h2>
  <div id=flexAbout>
  <div class="textbox" data-aos="fade-right">
  <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Proin varius, nunc vitae cursus efficitur, enim sem condimentum
nulla, id aliquam sem magna vel felis. Sed rutrum nisi eget
purus mattis congue. Integer luctus euismod volutpat. Etiam semper.</p>

  <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Proin varius, nunc vitae cursus efficitur, enim sem condimentum
nulla, id aliquam sem magna vel felis. Sed rutrum nisi eget
purus mattis congue. Integer luctus euismod volutpat. Etiam semper.</p>

  <p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Proin varius, nunc vitae cursus efficitur, enim sem condimentum
nulla, id aliquam sem magna vel felis. Sed rutrum nisi eget
purus mattis congue. Integer luctus euismod volutpat. Etiam semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Proin varius, nunc vitae cursus efficitur, enim sem condimentum
nulla, id aliquam sem magna vel felis. Sed rutrum nisi eget
purus mattis congue. Integer luctus euismod volutpat. Etiam semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Proin varius, nunc vitae cursus efficitur, enim sem condimentum
nulla, id aliquam sem magna vel felis. Sed rutrum nisi eget
purus mattis congue. Integer luctus euismod volutpat. Etiam semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Proin varius, nunc vitae cursus efficitur, enim sem condimentum
nulla, id aliquam sem magna vel felis. Sed rutrum nisi eget
purus mattis congue. Integer luctus euismod volutpat. Etiam semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Proin varius, nunc vitae cursus efficitur, enim sem condimentum
nulla, id aliquam sem magna vel felis. Sed rutrum nisi eget
purus mattis congue. Integer luctus euismod volutpat. Etiam semper.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Proin varius, nunc vitae cursus efficitur, enim sem condimentum
nulla, id aliquam sem magna vel felis. Sed rutrum nisi eget
purus mattis congue. Integer luctus euismod volutpat. Etiam semper.</p>
</div>
<img src="https://dummyimage.com/400x400/000/fff" id="selfie" data-aos="fadee"></img>
</div>
</div>

<div id="abilitiesPage" class="page">
<h2 data-aos="zoom-in">Abilities</h2>
  <div class="row">

  <div class="column"data-aos="fadee"data-aos-delay="0">
    <img src="img/htmllogo.png">
    <h3>html</h3>

  </div>

  <div class="column"data-aos="fadee"data-aos-delay="100">
    <img src="img/javascript-logo.png">
    <h3>javascript</h3>

  </div>

  <div class="column"data-aos="fadee"data-aos-delay="200">
    <img src="img/css3.svg" id=svg>
    <h3>css</h3>
    </div>


  <div class="column"data-aos="fadee"data-aos-delay="300">
    <img src="img/python.png">
    <h3>python</h3>
    </div>

  </div>
</div>



<div id="sidebar">

    <button class="hamburger hamburger--spin" type="button" id="hamButton">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>

  </button>


  <!-- <a href="javascript:" style="font-size:30px;cursor:pointer" class="closebtn" onclick="toggleMenu()">&#9776;</a> -->
  <a href="javascript:" onclick="scrolltTop();toggleMenu();">Welcome</a><br>
  <a href="javascript:" onclick="scrollAboutMe();toggleMenu();">About&nbsp;Me</a><br>
  <a href="javascript:" onclick="scrollAbilities();toggleMenu();">Abilities</a><br>
  <a href="javascript:" onclick="scrollProjects();toggleMenu();">Projects</a><br>
</div>
</body>

</html>
