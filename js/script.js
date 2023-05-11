const doc = document;
const linkSobre = doc.querySelector(".link.sobre");
const modal = doc.getElementById("modal");
const modalContaine = doc.getElementById("modal-container");

linkSobre.addEventListener("click", (e) => {
  e.preventDefault();
  modalContaine.innerHTML = `
  <span id="fechar-modal" class="fechar" onclick="handleFecharModal()">X</span>
  <h1>Maceió TI</h1>
  <p>
    Somos uma empresa de TI inovadora e confiável sediada na bela cidade de Maceió, Alagoas. Desde o seu surgimento em 2021, a Maceió TI tem se dedicado a fornecer serviços de informática de alta qualidade, tornando-se rapidamente uma referência no mercado local. Com uma equipe experiente e apaixonada pelo que faz, nossa empresa está empenhada em ajudar os clientes a alcançarem o sucesso e atender suas demandas de negócios.
  </p>
  <p>
    Na Maceió TI, entendemos que as necessidades de negócios estão sempre evoluindo. Por isso, oferecemos soluções personalizadas e escaláveis para auxiliar nossos clientes a crescerem e se adaptarem às mudanças do mercado. Com uma ampla gama de serviços, desde desenvolvimento de sites institucionais e gestão de projetos até suporte técnico e consultoria, estamos preparados para enfrentar qualquer desafio tecnológico que nossos clientes possam encontrar.
  </p>
  <p>
    O que nos diferencia é o compromisso com a excelência e a satisfação do cliente. Trabalhamos em estreita colaboração com nossos parceiros comerciais, entendendo suas necessidades específicas e fornecendo soluções sob medida que impulsionam o crescimento e melhoram a eficiência operacional. Com nossa experiência e conhecimento em tecnologia, estamos prontos para ser o parceiro ideal para sua empresa em Maceió, ajudando você a alcançar seus objetivos e destacar-se no mercado cada vez mais competitivo.
  </p>
  `;
  modal.classList.add("active");
});

const handleFecharModal = (params) => {
  modal.classList.remove("active");
};
