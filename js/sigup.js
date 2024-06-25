
function show() {
    var p = document.getElementById('password');
    p.setAttribute('type', 'text');
  }
  
  function hide() {
    var p = document.getElementById('password');
    p.setAttribute('type', 'password');
  }
  
  var pwShown = 0;
  var Shown = 0;

  document.getElementById("eye").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        document.getElementById("ispasson").style.height = "30px";
        document.getElementById("ispassoff").style.height = "30px";
        document.getElementById("ispasson").style.display = "none";
        document.getElementById("ispassoff").style.display = "block";
        show();
    } else {
        pwShown = 0;
        document.getElementById("ispassoff").style.display = "none";
        document.getElementById("ispasson").style.display = "block";
        hide();
    }
  }, false);
  
  
  
function show2() {
  var p = document.getElementById('passwordes');
  p.setAttribute('type', 'text');
}

function hide2() {
  var p = document.getElementById('passwordes');
  p.setAttribute('type', 'password');
}

var Shown = 0;

document.getElementById("eye2").addEventListener("click", function () {
  if (Shown == 0) {
      Shown = 1;
        document.getElementById("ispassontwo").style.display = "none";
        document.getElementById("ispassontwo").style.height = "30px";
        document.getElementById("ispassofftwo").style.height = "30px";
        document.getElementById("ispassofftwo").style.display = "block";
      show2();
  } else {
      Shown = 0;
      document.getElementById("ispassofftwo").style.display = "none";
      document.getElementById("ispassontwo").style.display = "block";
      hide2();
  }
}, false);