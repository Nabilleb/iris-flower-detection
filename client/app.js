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

function toFloat(id) {
  return parseFloat(document.getElementById(id).value);
}

function fmPct(x){
  if (typeof x !== "number" || isNaN(x)) {
    return "N/A";
  }
  return (x * 100).toFixed(2) + "%";
}


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  statusEl.innerText = "Loading...";
  resultEl.classList.add("hidden");
  rawEl.classList.add("hidden");
  rawEl.innerText = "";

  const sepal_length = toFloat("sepal_length");
  const sepal_width = toFloat("sepal_width");
  const petal_length = toFloat("petal_length");
  const petal_width = toFloat("petal_width");

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sepal_length,
        sepal_width,
        petal_length,
        petal_width,
      }),
    });

    const data = await response.json();
    statusEl.innerText = "Success!";

    predLabelEl.innerText = data.prediction;
    pSetosaEl.innerText = fmPct(data.probabilities.setosa);
    pVersicolorEl.innerText = fmPct(data.probabilities.versicolor);
    pVirginicaEl.innerText = fmPct(data.probabilities.virginica);

    resultEl.classList.remove("hidden");
    rawEl.innerText = JSON.stringify(data, null, 2);
    rawEl.classList.remove("hidden");
  } catch (err) {
    statusEl.innerText = "Error: " + err.message;
  }
});

