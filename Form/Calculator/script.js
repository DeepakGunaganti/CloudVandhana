function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "0";
}

// we use try and catch method for error detection//
function calculateResult() {
    try {
        document.getElementById("result").value = eval(document.getElementById("result").value);
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}