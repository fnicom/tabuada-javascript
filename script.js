const tabuada = () => {
  let numero = document.getElementById("numero").value;

  let result = document.getElementById("output");

  let tabuada = "";

  for (let count = 0; count <= 10; count++) {
    tabuada = `${tabuada + numero} x ${count} = ${count * numero} <br>`;
  }

  result.innerHTML = tabuada;
};

const limpar = () => {
  output.innerHTML = "<p>LIMPOU</p>";
};
