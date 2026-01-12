const API_URL = "http://127.0.0.1:5000/predict";

const form = document.getElementById("irisForm");
const statusEl = document.getElementById("status");
const resultEl = document.getElementById("result");
const rawEl = document.getElementById("raw");

const predLabelEl = document.getElementById("predLabel");
const pSetosaEl = document.getElementById("pSetosa");
const pVersicolorEl = document.getElementById("pVersicolor");
const pVirginicaEl = document.getElementById("pVirginica");


function setInputs(a, b, c, d) {
  document.getElementById("sepal_length").value = a;
  document.getElementById("sepal_width").value = b;
  document.getElementById("petal_length").value = c;
  document.getElementById("petal_width").value = d;
}


document.getElementById("fillSetosa").addEventListener("click", () => {
  setInputs(5.1, 3.5, 1.4, 0.2);
});

document.getElementById("fillVersicolor").addEventListener("click", () => {
  setInputs(6.0, 2.7, 4.5, 1.5);
});

document.getElementById("fillVirginica").addEventListener("click", () => {
  setInputs(6.5, 3.0, 5.5, 2.0);
});