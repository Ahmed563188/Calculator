// script.js
function appendRes(res) {
    document.getElementById('display').value += res;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        document.getElementById('display').value = 'خطأ';
    }
}