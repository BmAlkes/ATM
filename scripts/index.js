const dados = prompt('digite seu nome para acessar conta')


function atm() {
  let saldo = 9999.0;
  let showSaldo = document.querySelector(".value");
  let display = document.querySelector(".display");
  let displayNotas = document.querySelector(".bill");
  let notasDisponivel = [100, 50, 20, 10];
  let showSaque = document.querySelector('.withdraw')
  let showName = document.querySelector('.name')
  
  showName.innerText = dados

  alert(` Hello ${dados} seu saldo disponivel para saque e ${saldo}`)

  notasDisponivel.forEach((item) => {
    displayNotas.innerHTML += `<span>$${item}</span>`;
  });

  showSaldo.innerHTML = saldo.toFixed(2);

  this.capturaCliques = () => {
    document.addEventListener("click", (event) => {
      const el = event.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("gray")) {
        display.value = "";
      }
      if (el.classList.contains("pink")) this.realizarSaque(el);
    });
  };
  this.addNumDisplay = (el) => (display.value += el.innerText);
  this.capturaCliques();

  this.realizarSaque = () => {
    let valorDeSaque = Number(display.value);
    showSaldo.innerHTML = saldo.toFixed(2) - display.value;

    if (valorDeSaque < 10) {
      alert("valor Invalido, por valores para saque maior que $10");
    }
    if (valorDeSaque > 1000) {
      alert("Nao permitido saque maiores que $1000");
      showSaldo.innerHTML = saldo.toFixed(2);
    }
    const notasDeCem = [];
    const notasDeCiquenta = [];
    const notasDeVinte = [];
    const notasDeDez = [];

   debugger
    while (valorDeSaque > 0) {
      if (valorDeSaque >= 100) {
        notasDeCem.push("$100");
        valorDeSaque = valorDeSaque - 100;
      }else if (valorDeSaque >= 50) {
        notasDeCiquenta.push("$50");
        valorDeSaque = valorDeSaque - 50;
      }else if (valorDeSaque >= 20) {
        notasDeVinte.push("$20");
        valorDeSaque = valorDeSaque - 20;
      }else if (valorDeSaque >= 10) {
        notasDeDez.push("$10");
        valorDeSaque = valorDeSaque - 10;
      }
    }

    const total = [];
    total.push(notasDeCem, notasDeCiquenta, notasDeVinte, notasDeDez);
   
    total.forEach((item) => {
      showSaque.innerText += item
    })

  };
}

atm();
