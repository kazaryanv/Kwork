const button1 = document.getElementById('checked1');
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
button1.addEventListener('click', function handleClick() {
  if (button1.value == "default") {
    button1.style.backgroundImage = "url(./img/Vector.png)";
    button1.style.border = "1px solid #87FF65";
    button1.style.backgroundPosition = "initial";
    button1.style.backgroundRepeat = "no-repeat";
    button1.style.backgroundSize = "auto";
    button1.style.backgroundPositionX = "center";
    button1.style.backgroundPositionY = "center";
    button1.value = "img";
  } else if (button1.value == "img") {
    button1.style.backgroundImage = "unset";
    button1.style.border = "1px solid #FFFFFF";
    button1.value = "default";
  }
});

const pass = document.getElementById("Passwords");
const file = document.getElementById("Files");
const links = document.getElementById("URLs");
file.addEventListener('click', function handleClicke() {
  text = document.getElementById("placetextA").style.display = "none";
  radio = document.getElementById("radio").style.display = "none";
  Advertising = document.getElementById("Advertising").style.display = "none";
  silvAdvertising = document.getElementById("silvAdvertising").style.display = "block";
  formnon = document.getElementById("filenon").style.display = "flex";
  form = document.getElementById("forms").style.marginBottom = "20px";
  linkenone = document.getElementById("linkenone").style.display = "none";
  text = document.getElementById("allow").style.display = "flex";
  file.style.background = "#273138";
  links.style.background = "#09141A";
  pass.style.background = "#09141A";
  textarea = document.getElementById("lineresizetextarea").style.display = "none";
});
links.addEventListener('click', function handleClicke() {
  text = document.getElementById("placetextA").style.display = "none";
  text = document.getElementById("allow").style.display = "none";
  linkenone = document.getElementById("linkenone").style.display = "block";
  radio = document.getElementById("radio").style.display = "none";
  Advertising = document.getElementById("Advertising").style.display = "none";
  silvAdvertising = document.getElementById("silvAdvertising").style.display = "block";
  formnon = document.getElementById("filenon").style.display = "none";
  form = document.getElementById("forms").style.marginBottom = "20px";
  links.style.background = "#273138";
  file.style.background = "#09141A";
  pass.style.background = "#09141A";
  textarea = document.getElementById("lineresizetextarea").style.display = "none";
});
pass.addEventListener('click', function handleClicke() {
  text = document.getElementById("placetextA").style.display = "block";
  text = document.getElementById("allow").style.display = "flex";
  linkenone = document.getElementById("linkenone").style.display = "none";
  radio = document.getElementById("radio").style.display = "flex";
  Advertising = document.getElementById("Advertising").style.display = "block";
  silvAdvertising = document.getElementById("silvAdvertising").style.display = "none";
  formnon = document.getElementById("filenon").style.display = "none";
  form = document.getElementById("forms").style.marginBottom = "90px";
  form = document.getElementById("forms").style.marginTop = "50px";
  file.style.background = "#09141A";
  links.style.background = "#09141A";
  pass.style.background = "#273138";
  textarea = document.getElementById("lineresizetextarea").style.display = "block";
});
// ////////////////////////////////////////////////////////////////////////
///////////////////////////////////Dropdawn////////////////////////////////////////
function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
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

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
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
function myFuncLogget() {
  document.getElementById("myfunclog").classList.toggle("show");
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

///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
let password = document.getElementById("Check");
function genPassword2() {
    
  let simvols = document.getElementById("simvols").checked;
  let numbers = document.getElementById("numbers").checked;
  let razdelenie = document.getElementById("Razdel").checked;
  let NumberLenght = document.getElementById("numberlenght").value - 1;
  let simvolLenght = document.getElementById("simvoles").value - 1;
  let razdelyon = document.getElementById("bovandak").value - 1;
  let passwordLength = document.getElementById("maximumlenght").value - 1 || document.getElementById("minimumlenght").value;
  let passwordlen = "abcdefghijklmnopqrstuvwxyz";
  let simvolLen = "@#$%&";
  let razdelLen = "~_-";
  let numb = "123456789"
  let passLenght = "";
  let razdelLenght = "";
  let simvolleng = "";
  let numlenght = "";

    for (let i = 0; i <= razdelyon; i++) {
        let randomrazdel = Math.floor(Math.random() * razdelLen.length);
        razdelLenght += razdelLen.substring(randomrazdel, randomrazdel + 1);
    }
    
    for (let i = 0; i <= NumberLenght; i++) {
      let randomNumber = Math.floor(Math.random() * numb.length);
      numlenght += numb.substring(randomNumber, randomNumber + 1);
  }
  console.log(numlenght);
 

    for (let i = 0; i <= simvolLenght; i++) {
      let randomsimvol = Math.floor(Math.random() * simvolLen.length);
      simvolleng += simvolLen.substring(randomsimvol, randomsimvol + 1);
    }

      for (let i = 0; i <= passwordLength; i++) {
        let randompass = Math.floor(Math.random() * passwordlen.length);
        passLenght += passwordlen.substring(randompass, randompass + 1);
    }

  if (simvols == true && numbers == true && razdelenie == true) {
    let simNum = passLenght + simvolleng + numlenght + razdelLenght;
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * simNum.length);
        password += simNum.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("Check").value = password;
  }else if (simvols == true && numbers == true) {
    let simNum = passLenght + simvolleng + numlenght;
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * simNum.length);
        password += simNum.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("Check").value = password;
  }else if (simvols == true && razdelenie == true) {
    let Num = passLenght + simvolleng + razdelLenght;
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * Num.length);
        password += Num.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("Check").value = password;
  }else if (numbers == true && razdelenie==true) {
    let Num = passLenght + numlenght + razdelLenght;
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * Num.length);
        password += Num.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("Check").value = password;
  }else if (numbers==true){
    let Num = passLenght +  numlenght ;
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * Num.length);
        password += Num.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("Check").value = password;
  }else if (simvols==true) {
    let simvol = passLenght + simvolleng ;
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * simvol.length);
        password += simvol.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("Check").value = password;
  }else if(razdelenie == true){
    let razdel = passLenght + razdelLenght;
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * razdel.length);
        password += razdel.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("Check").value = password;
  }else{
    let password = "";

  for (let i = 0; i <= passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * passLenght.length);
      password += passLenght.substring(randomNumber, randomNumber + 1);
  }

  document.getElementById("Check").value = password;
  }
}
let Textarea = document.getElementById("placetextA");
function genPassword() {
    
    let simvols = document.getElementById("simvols").checked;
    let numbers = document.getElementById("numbers").checked;
    let razdelenie = document.getElementById("Razdel").checked;
    let NumberLenght = document.getElementById("numberlenght").value;
    let simvolLenght = document.getElementById("simvoles").value;
    let razdelyon = document.getElementById("bovandak").value;
    let passwordLength = document.getElementById("maximumlenght").value || document.getElementById("minimumlenght").value;
    let passwordlen = "abcdefghijklmnopqrstuvwxyz";
    let simvolLen = "@#$%&";
    let razdelLen = "~_-";
    let numb = "123456789"
    let passLenght = "";
    let razdelLenght = "";
    let simvolleng = "";
    let numlenght = "";

      for (let i = 0; i <= razdelyon; i++) {
          let randomrazdel = Math.floor(Math.random() * razdelLen.length);
          razdelLenght += razdelLen.substring(randomrazdel, randomrazdel + 1);
      }
      
      for (let i = 0; i <= NumberLenght; i++) {
        let randomNumber = Math.floor(Math.random() * numb.length);
        numlenght += numb.substring(randomNumber, randomNumber + 1);
    }

      for (let i = 0; i <= simvolLenght; i++) {
        let randomsimvol = Math.floor(Math.random() * simvolLen.length);
        simvolleng += simvolLen.substring(randomsimvol, randomsimvol + 1);
      }

        for (let i = 0; i <= passwordLength; i++) {
          let randompass = Math.floor(Math.random() * passwordlen.length);
          passLenght += passwordlen.substring(randompass, randompass + 1);
      }

    if (simvols == true && numbers == true && razdelenie == true) {
      let simNum = passLenght + simvolleng + numlenght + razdelLenght;
      let password = "";

      for (let i = 0; i <= passwordLength; i++) {
          let randomNumber = Math.floor(Math.random() * simNum.length);
          password += simNum.substring(randomNumber, randomNumber - 1);
      }

      document.getElementById("placetextA").value = password;
    }else if (simvols == true && numbers == true) {
      let simNum = passLenght + simvolleng + numlenght;
      let password = "";

      for (let i = 0; i <= passwordLength; i++) {
          let randomNumber = Math.floor(Math.random() * simNum.length);
          password += simNum.substring(randomNumber, randomNumber + 1);
      }

      document.getElementById("placetextA").value = password;
    }else if (simvols == true && razdelenie == true) {
      let Num = passLenght + simvolleng + razdelLenght;
      let password = "";

      for (let i = 0; i <= passwordLength; i++) {
          let randomNumber = Math.floor(Math.random() * Num.length);
          password += Num.substring(randomNumber, randomNumber + 1);
      }

      document.getElementById("placetextA").value = password;
    }else if (numbers == true && razdelenie==true) {
      let Num = passLenght + numlenght + razdelLenght;
      let password = "";

      for (let i = 0; i <= passwordLength; i++) {
          let randomNumber = Math.floor(Math.random() * Num.length);
          password += Num.substring(randomNumber, randomNumber + 1);
      }

      document.getElementById("placetextA").value = password;
    }
    else if (numbers==true){
      let Num = passLenght +  numlenght ;
      let password = "";

      for (let i = 0; i <= passwordLength; i++) {
          let randomNumber = Math.floor(Math.random() * Num.length);
          password += Num.substring(randomNumber, randomNumber + 1);
      }

      document.getElementById("placetextA").value = password;
    }else if (simvols==true) {
      let simvol = passLenght + simvolleng ;
      let password = "";

      for (let i = 0; i <= passwordLength; i++) {
          let randomNumber = Math.floor(Math.random() * simvol.length);
          password += simvol.substring(randomNumber, randomNumber + 1);
      }

      document.getElementById("placetextA").value = password;
    }else if(razdelenie == true){
      let razdel = passLenght + razdelLenght;
      let password = "";

      for (let i = 0; i <= passwordLength; i++) {
          let randomNumber = Math.floor(Math.random() * razdel.length);
          password += razdel.substring(randomNumber, randomNumber + 1);
      }

      document.getElementById("placetextA").value = password;
    }else{
      let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * passLenght.length);
        password += passLenght.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("placetextA").value = password;
    }
}
function resetPassword() {
  document.getElementById("simvols").checked = false;
  document.getElementById("numbers").checked = false;
  document.getElementById("Razdel").checked = false;
  document.getElementById("numberlenght").value = 3;
  document.getElementById("simvoles").value = 1;
  document.getElementById("bovandak").value = 2; 
  document.getElementById("maximumlenght").value = 7; 
  document.getElementById("minimumlenght").value = 4;
  document.getElementById("dzaynavorner").value = 4;
}
// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

function MinusinputvalueNUmber() {
  let min = document.getElementById("minusnumberlenght");
  let inp =  document.getElementById("numberlenght");
  let sum =  +inp.value - 1;
  if (inp.value < 1) {
      alert("number is a minimum 1 your number is a " + sum);
  }
  else if (inp.value > 0) {
      inp.value = +inp.value - 1;
  }
  }
function MaxinputvalueNum() {
  let min = document.getElementById("plusnumberlenght");
  let inp =  document.getElementById("numberlenght");
      if (min.click) {
          inp.value = +inp.value + 1;
      }
}

function Minusinputvalueminimumlenght() {
  let inp =  document.getElementById("minimumlenght");
  let sum =  +inp.value - 1;
  if (inp.value < 1) {
      alert("number is a minimum 1 your number is a " + sum);
  }
  else if (inp.value > 0) {
      inp.value = +inp.value - 1;
  }
  }
function Maxinputvaluemaximumlenght() {
  let min = document.getElementById("plusminimumlenght");
  let inp =  document.getElementById("minimumlenght");
      if (min.click) {
          inp.value = +inp.value + 1;
      }
}

function Minusinputvaluemaximummaximumlenght() {
  let inp =  document.getElementById("maximumlenght");
  let sum =  +inp.value - 1;
  if (inp.value < 1) {
      alert("number is a minimum 1 your number is a " + sum);
  }
  else if (inp.value > 0) {
      inp.value = +inp.value - 1;
  }
  }
function Maxinputvaluemaximummaximumlenght() {
  let min = document.getElementById("plusmaximumlenght");
  let inp =  document.getElementById("maximumlenght");
      if (min.click) {
          inp.value = +inp.value + 1;
      }
}
function Minusinputvalueminussimvoles() {
  let inp =  document.getElementById("simvoles");
  let sum =  +inp.value - 1;
  if (inp.value < 1) {
      alert("number is a minimum 1 your number is a " + sum);
  }
  else if (inp.value > 0) {
      inp.value = +inp.value - 1;
  }
  }
function Maxinputvalueplussimvoles() {
  let min = document.getElementById("plussimvoles");
  let inp =  document.getElementById("simvoles");
      if (min.click) {
          inp.value = +inp.value + 1;
      }
}
function Minusinputvalueminusdzaynavorner() {
  let inp =  document.getElementById("dzaynavorner");
  let sum =  +inp.value - 1;
  if (inp.value < 1) {
      alert("number is a minimum 1 your number is a " + sum);
  }
  else if (inp.value > 0) {
      inp.value = +inp.value - 1;
  }
  }
function Maxinputvalueplusdzaynavorner() {
  let min = document.getElementById("plusdzaynavorner");
  let inp =  document.getElementById("dzaynavorner");
      if (min.click) {
          inp.value = +inp.value + 1;
      }
}

function Minusinputvaluebovandak() {
  let inp =  document.getElementById("bovandak");
  let sum =  +inp.value - 1;
  if (inp.value < 1) {
      alert("number is a minimum 1 your number is a " + sum);
  }
  else if (inp.value > 0) {
      inp.value = +inp.value - 1;
  }
  }
function Maxinputvaluebovandak() {
  let min = document.getElementById("plusbovandak");
  let inp =  document.getElementById("bovandak");
      if (min.click) {
          inp.value = +inp.value + 1;
      }
}
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////