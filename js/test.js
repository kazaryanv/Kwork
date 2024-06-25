
    function Minusinputvalue() {
        let min = document.getElementById("minusvalueinput");
        let inp =  document.getElementById("inputvalueminmax");
        let sum =  +inp.value - 1;
        if (inp.value <= 1) {
            alert("number is a minimum 1 your number is a " + sum);
        }
        else if (inp.value > 1) {
            inp.value = +inp.value - 1;
        }
        }
    function Maxinputvalue() {
        let min = document.getElementById("maximumvalueinput");
        let inp =  document.getElementById("inputvalueminmax");
            if (min.click) {
                inp.value = +inp.value + 1;
            }
    }

    