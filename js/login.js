
function show() {
    var p = document.getElementById('password');
    p.setAttribute('type', 'text');
  }
  
  function hide() {
    var p = document.getElementById('password');
    p.setAttribute('type', 'password');
  }
  
  var pwShown = 0;
  
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
  
  const button = document.getElementById('checked');
  
  button.addEventListener('click', function handleClick() {
    if (button.value == "false") {
      button.style.backgroundImage = "url(./img/Vector.png)";
      button.style.border = "1px solid #87FF65";
      button.style.backgroundPosition = "initial";
      button.style.backgroundRepeat = "no-repeat";
      button.style.backgroundSize = "auto";
      button.style.backgroundPositionX = "center";
      button.style.backgroundPositionY = "center";
      button.value = "tru";
    } else if (button.value == "tru") {
      button.style.backgroundImage = "unset";
      button.style.border = "1px solid #FFFFFF";
      button.value = "false";
    }
  });