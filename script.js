document.getElementById("btn").addEventListener("click", onClick)

function onClick() {
let a = +document.getElementById("1").value;
let b = +document.getElementById("2").value;
let c = +document.getElementById("3").value;
let d = +document.getElementById("4").value;
let e = +document.getElementById("5").value;

let msg = (a + b + c + d + e) / 5;
document.getElementById("text").innerHTML = Math.round(msg);
}
