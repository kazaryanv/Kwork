
let pwShown = 0;

document.getElementById("myvalue").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        document.getElementById("myvalue").style.filter = "blur(var(--value, 0rem))";
    } else {
        pwShown = 0;
        document.getElementById("myvalue").style.filter = "blur(var(--value, 1rem))";
    }
  }, false);

function copyToClipboard() {
    let textBox = document.getElementById("myvalue");
    textBox.focus();
    textBox.select();
    document.execCommand("copy");
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunctione() {
    document.getElementById("myDropdowne").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('#dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
function myFunctionLoggetlanguige() {
    document.getElementById("myDropdownlanguiges").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  