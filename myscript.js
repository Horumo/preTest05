function runScript() {
    var value = document.getElementById("number").value;

    var isPrime = true;
    if (document.getElementById('cal').value == 1) {

        for (let i = 2; i < value; i++) {
            if (value % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            document.getElementById('result').innerHTML = "True";
        } else {
            document.getElementById('result').innerHTML = "False";
        }

    } else if (document.getElementById('cal').value == 2) {

        var a = (5 * Math.pow(value, 2) + 4),
            b = (5 * Math.pow(value, 2) - 4)

        var result = Math.sqrt(a) % 1 == 0,
            res = Math.sqrt(b) % 1 == 0;

        //fixed this line
        if (result || res == true) // checks the given input is fibonacci series
        {
            document.getElementById('result').innerHTML = "True";

        } else {
            document.getElementById('result').innerHTML = "False";
        }
    }
}