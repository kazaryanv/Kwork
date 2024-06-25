function startTimer() {
    var p_time = document.getElementById("time").innerHTML;
    var timeArray = p_time.split(/[:]+/);
    var min = timeArray[0];
    var sec = checkSecond(timeArray[1] - 1);
    if (sec === "59") { // <- the fix
      min = min - 1;
    }
  
    document.getElementById("time").innerHTML = min + ":" + sec;
  
    if (min <= 0 && sec == 0) {
      clearTimeout(timerRef);
      console.log("Time is up!");
      return;
    }
  
    if (min === 1 && sec === 0) {
      min = 0;
    }
    var timerRef = setTimeout(startTimer, 1000);
  }
  
  function checkSecond(seconds) {
    if (seconds < 10 && seconds >= 0) {
      seconds = "0" + seconds;
    }
    if (seconds < 0) {
      seconds = "59";
    }
    return seconds;
  }
  
  function wrongTimer() {
    var x_time = document.getElementById("time").innerHTML;
    var wrongArray = x_time.split(/[:]+/);
    var x_min = wrongArray[0];
    var x_sec = checkSecond(wrongArray[1] - 1);
    if (x_sec === 59) {
      x_min = x_min - 1;
    }
    x_sec -= 10;
    console.log(document.getElementById("time").innerHTML);
    console.log("sec " + x_sec);
    document.getElementById("time").innerHTML = x_min + ":" + x_sec;
  }
  
  startTimer();
  