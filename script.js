const input = document.getElementById("cep");
const btn = document.querySelector(".button");
const cepDiv = document.querySelector(".cepText");

function handleClick() {
  const cepValor = input.value;

  const cep = fetch(`https://viacep.com.br/ws/${cepValor}/json/`);
  cep
    .then((valor) => valor.json())
    .then((r) => {
      if (r.erro) {
        cepDiv.innerHTML = "Endereço não encontrado";
        cepDiv.classList.remove("cepText");
      } else {
        const p = `<p>Localidade: ${r.localidade}/${r.uf}, <p>Bairro:  ${r.bairro}, <p>Logradouro: ${r.logradouro}, <p>CEP: ${r.cep}`;
        const insertP = p.split(", ").join("</p>");
        cepDiv.innerHTML = insertP;
        cepDiv.classList.add("cepText");
      }
    })
    .catch(() => {
      cepDiv.innerHTML = "CEP inválido";
      if ((cepDiv.innerHTML = "CEP inválido")) {
        cepDiv.classList.remove("cepText");
      }
    });
}

btn.addEventListener("click", handleClick);
