const doc = document;
const linkSobre = doc.querySelector(".link.sobre");
const linkContato = doc.querySelector(".link.contato");
const modal = doc.getElementById("modal");
const modalContainer = doc.getElementById("modal-container");
const cards = doc.querySelectorAll(".card");

linkSobre.addEventListener("click", (e) => {
  e.preventDefault();
  openModal("Sobre", `
    <p>
      Na Maceió TI, entendemos que a tecnologia é um elemento vital para o sucesso empresarial. Por isso, oferecemos soluções personalizadas e escaláveis que se adaptam às suas necessidades em constante evolução. Desde o desenvolvimento de sites institucionais até a consultoria estratégica, nossa ampla gama de serviços é projetada para impulsionar o crescimento e melhorar a eficiência operacional. Trabalhamos em estreita colaboração com nossos clientes, entendendo suas metas e objetivos, e oferecendo soluções sob medida que realmente fazem a diferença. Junte-se a nós e descubra como a Maceió TI pode ajudar sua empresa a se destacar em um mercado cada vez mais competitivo.
    </p>
  `);
});

linkContato.addEventListener("click", (e) => {
  e.preventDefault();
  openModal("Contatos", `
    <ul class="lista-contatos">
      <li class="list-contatos-item">
        <a href="tel:82996207887">
          <h2>Telefone:</h2>
          <span>(82) 9 9620-7887</span>
        </a>
      </li>
      <li class="list-contatos-item">
        <a href="https://api.whatsapp.com/send?phone=5582996207887&text=Ol%C3%A1,%0ACheguei%20atrav%C3%A9s%20do%20site." target="_blank">
          <h2>Whatsapp:</h2>
          <span>(82) 9 9620-7887</span>
        </a>
      </li>
      <li class="list-contatos-item">
        <a href="mailto:diego.neves@outlook.com.br">
          <h2>E-mail:</h2>
          <span>diego.neves@maceioti.com.br</span>
        </a>
      </li>
    </ul>
  `);
});

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.value == 'card hardware') {
      openModal('Hardware',
      `
        <p>Serviços de hardware</p>
      `)
    }
  });
});

const openModal = (title, content) => {
  modalContainer.innerHTML = `
    <span id="fechar-modal" class="fechar" onclick="handleFecharModal()"><img src="assets/images/close-modal.svg"></span>
    <header>
      <h1>${title}</h1>
    </header>
    ${content}
  `;
  modal.classList.add("active");
};

const handleFecharModal = () => {
  modal.classList.remove("active");
};
