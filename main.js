function scrollToSection() {
  document.getElementById("solucoes").scrollIntoView({ behavior: "smooth" });
}

//outra parte do projeto: para entrar nas abas//


function copiarTextoDoTitulo(event) {
  // Pega o texto do elemento <h3> clicado
  const textoParaCopiar = event.target.textContent;

  // Cria uma área de texto temporária para copiar o conteúdo
  const areaDeTransferencia = document.createElement('textarea');
  areaDeTransferencia.value = textoParaCopiar;
  document.body.appendChild(areaDeTransferencia);

  // Seleciona o texto na área de transferência e tenta copiá-lo
  areaDeTransferencia.select();
  try {
    const sucesso = document.execCommand('copy');
    if (sucesso) {
      alert(`"${textoParaCopiar}" copiado para a área de transferência!`);
    } else {
      alert('Não foi possível copiar o texto.');
    }
  } catch (err) {
    alert('Erro ao tentar copiar: ' + err);
  }

  // Remove a área de texto temporária
  document.body.removeChild(areaDeTransferencia);
}

// Pega todos os elementos <h3> dentro dos cards
const titulosDosCards = document.querySelectorAll('.card h3');

// Adiciona um "listener" de evento de clique a cada título
titulosDosCards.forEach(titulo => {
  titulo.addEventListener('click', copiarTextoDoTitulo);
});

// Função para rolar a página até a seção de soluções (já existente no seu HTML)
function scrollToSection() {
  document.getElementById('solucoes').scrollIntoView({ behavior: 'smooth' });
}