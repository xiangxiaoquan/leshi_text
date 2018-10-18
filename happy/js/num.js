var price = 0.00;
var price1 = 0.00;
var price2 = 0.00;

function jian() {
    var i = parseInt(document.getElementById("shang").valueOf().value) - 1;
    if (i <= 0) {
        i = 0;
    }
    document.getElementById("shang").valueOf().value = i;
    price1 = 299 * i;
    zong();
}
function jia() {
    var i = parseInt(document.getElementById("shang").valueOf().value) + 1;
    document.getElementById("shang").valueOf().value = i;
    price1 = 299 * i;
    zong();
}
function suan(number) {
    price = price1 + price2;
    if (isNaN(number)) {
        return false;
    }
    number = Math.round(number * 100) / 100;
    var s = number.toString();
    var rs = s.indexOf(".");
    if (rs < 0) {
        rs = s.length;
        s += ".";
    }
    while (s.length <= rs + 2) {
        s += "0";
    }
    return s;
}
function zong() {
    price = price1 + price2;
    if (isNaN(price)) {
        return false;
    }
    price = Math.round(price * 100) / 100;
    var s = price.toString();
    var rs = s.indexOf(".");
    if (rs < 0) {
        rs = s.length;
        s += ".";
    }
    while (s.length <= rs + 2) {
        s += "0";
    }
    document.querySelector(".qian").innerHTML=s;
}