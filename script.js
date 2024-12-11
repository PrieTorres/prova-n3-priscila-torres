let contador = 0;

function enviar() {
  const input = document.querySelector("#input-1");
  const value = input.value;

  window.alert(`Valor do input: ${value}`);
}

function handleButtonAlertClick() {
  window.alert('Bem-vindo!');

  document.querySelector("#caixa-texto").innerHTML = `
    <div>texto</div>
    <input id="input-1"/>
    <button onclick="enviar()">enviar</button>
  `;
}

function incrementar() {
  contador++;
  document.querySelector("#contador").innerHTML = `
  valor: valor: <span id="numero-contador">${contador}</span>
  <button onclick="incrementar()" class="quest-3">
    incrementar
  </button>
  `;
}

function adicionarLista() {
  const input = document.querySelector("#input-4");
  const value = input.value;

  const lista = document.querySelector("#lista");
  const listItem = document.createElement("li");
  listItem.textContent = value;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "x";
  removeButton.onclick = function() {
    lista.removeChild(listItem);
  };

  listItem.appendChild(removeButton);
  lista.appendChild(listItem);
}

function alternarTema() {
  document.body.classList.toggle("escuro");
}

function carregar() {
  const progressBar = document.querySelector("#progress-bar");
  let width = parseInt(progressBar.style.width) || 0;
  if (width < 100) {
    width += 10;
    progressBar.style.width = width + "%";
  }
}


let timerInterval;

function iniciarTimer() {
  let tempo = 10;
  const timerDiv = document.querySelector("#timer");
  timerDiv.textContent = tempo;

  timerInterval = setInterval(() => {
    tempo--;
    timerDiv.textContent = tempo;
    if (tempo <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}


function adicionarTabela() {
  const nomeInput = document.querySelector("#nome");
  const idadeInput = document.querySelector("#idade");
  const nome = nomeInput.value;
  const idade = idadeInput.value;

  const tabela = document.querySelector("#tabela");
  const novaLinha = tabela.insertRow();

  const nomeCelula = novaLinha.insertCell(0);
  const idadeCelula = novaLinha.insertCell(1);

  nomeCelula.textContent = nome;
  idadeCelula.textContent = idade;

  nomeInput.value = "";
  idadeInput.value = "";
}


document.querySelector("#form-cadastro").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.querySelector("#nome-10").value;
  const email = document.querySelector("#email-10").value;
  const senha = document.querySelector("#senha-10").value;

  let valid = true;

  if (nome.length < 3) {
    document.querySelector("#nome-10").classList.add("erro");
    valid = false;
  } else {
    document.querySelector("#nome-10").classList.remove("erro");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.querySelector("#email-10").classList.add("erro");
    valid = false;
  } else {
    document.querySelector("#email-10").classList.remove("erro");
  }

  if (senha.length < 6) {
    document.querySelector("#senha-10").classList.add("erro");
    valid = false;
  } else {
    document.querySelector("#senha-10").classList.remove("erro");
  }

  if (valid) {
    window.alert("Formulário enviado com sucesso!");
  }
});
