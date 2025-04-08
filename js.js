function gerarCPF() {
  var cpf = '';
  for (var i = 0; i < 9; i++) {
    cpf += Math.floor(Math.random() * 10);
  }

  var soma = 0;
  for (var i = 0; i < 9; i++) {
    soma += cpf.charAt(i) * (10 - i);
  }

  var resto = 11 - (soma % 11);
  var digito1 = resto === 10 || resto === 11 ? 0 : resto;

  cpf += digito1;

  soma = 0;
  for (var i = 0; i < 10; i++) {
    soma += cpf.charAt(i) * (11 - i);
  }

  resto = 11 - (soma % 11);
  var digito2 = resto === 10 || resto === 11 ? 0 : resto;

  cpf += digito2;

  return cpf;
}

function gerarCPFs() {
  var quantidade = document.getElementById('quantidade-cpf').value;
  var cpfs = '';

  for (var j = 0; j < quantidade; j++) {
    var cpfAleatorio = gerarCPF();
    cpfs += `<div class="py-1">${cpfAleatorio}</div>`;
  }

  document.getElementById('cpfs').innerHTML = `
    <div class="font-semibold text-gray-800 mb-2">CPFs Gerados:</div>
    <div class="space-y-1">${cpfs}</div>
  `;
}

function gerarNomes() {
  var quantidade = document.getElementById('quantidade').value;
  var nomes = '';

  var listaNomes = ["João", "Maria", "Pedro", "Ana", "Lucas", "Julia", "Mariana", "Carlos", "Camila", "Rafael"];
  var listaSobrenomes = ["Silva", "Santos", "Oliveira", "Pereira", "Almeida", "Ferreira", "Rocha", "Gomes", "Martins", "Lima"];

  for (var j = 0; j < quantidade; j++) {
    var nomeAleatorio = listaNomes[Math.floor(Math.random() * listaNomes.length)].toUpperCase();
    var sobrenomeAleatorio = listaSobrenomes[Math.floor(Math.random() * listaSobrenomes.length)].toUpperCase();
    nomes += `<div class="py-1">${nomeAleatorio} ${sobrenomeAleatorio}</div>`;
  }

  document.getElementById('nomes').innerHTML = `
    <div class="font-semibold text-gray-800 mb-2">Nomes Gerados:</div>
    <div class="space-y-1">${nomes}</div>
  `;
}

function gerarEmails() {
  var quantidade = document.getElementById('quantidade-email').value;
  var emails = '';

  var listaNomes = ["joao", "maria", "pedro", "ana", "lucas", "julia", "mariana", "carlos", "camila", "rafael"];
  var listaSobrenomes = ["silva", "santos", "oliveira", "pereira", "almeida", "ferreira", "rocha", "gomes", "martins", "lima"];
  var provedores = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"];

  for (var j = 0; j < quantidade; j++) {
    var nomeAleatorio = listaNomes[Math.floor(Math.random() * listaNomes.length)];
    var sobrenomeAleatorio = listaSobrenomes[Math.floor(Math.random() * listaSobrenomes.length)];
    var provedorAleatorio = provedores[Math.floor(Math.random() * provedores.length)];
    var email = nomeAleatorio + sobrenomeAleatorio + "@" + provedorAleatorio;
    emails += `<div class="py-1">${email}</div>`;
  }

  document.getElementById('emails').innerHTML = `
    <div class="font-semibold text-gray-800 mb-2">Emails Gerados:</div>
    <div class="space-y-1">${emails}</div>
  `;
}

function limparTela() {
  document.getElementById('cpfs').innerHTML = '';
  document.getElementById('nomes').innerHTML = '';
  document.getElementById('emails').innerHTML = '';
} 