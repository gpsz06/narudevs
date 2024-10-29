window.onload = function() {
      document.getElementById('popup').classList.add('show');
      document.getElementById('popup-overlay').classList.add('show');
};
  
    // Fecha o popup quando o botão é clicado
    document.getElementById('close-popup').onclick = function() {
      document.getElementById('popup').classList.remove('show');
      document.getElementById('popup-overlay').classList.remove('show');
};

const listaSelecaoNarudevs = document.querySelectorAll(".narudev");

listaSelecaoNarudevs.forEach(narudev => {
	narudev.addEventListener("click", () => {
		esconderCartaoNarudev();

		const idNarudevSelecionado = mostrarCartaoNarudevSelecionado(narudev);

		desativarNarudevNaListagem();
		ativarNarudevSelecionadoNaListagem(idNarudevSelecionado);

	})
})


function ativarNarudevSelecionadoNaListagem(idNarudevSelecionado) {
	const narudevSelecionadoNaListagem = document.getElementById(idNarudevSelecionado);
	narudevSelecionadoNaListagem.classList.add("ativo");
}

function desativarNarudevNaListagem() {
	const narudevAtivoNaListagem = document.querySelector(".ativo");
	narudevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoNarudevSelecionado(narudev) {
	const idNarudevSelecionado = narudev.attributes.id.value;
	const idDoCartaoNarudevParaAbrir = "cartao-" + idNarudevSelecionado;
	const cartaoNarudevParaAbrir = document.getElementById(idDoCartaoNarudevParaAbrir);
	cartaoNarudevParaAbrir.classList.add("aberto");
	return idNarudevSelecionado;
}

function esconderCartaoNarudev() {
	const cartaoNarudevAberto = document.querySelector(".aberto");
	cartaoNarudevAberto.classList.remove("aberto");
}

