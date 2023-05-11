const doc = document
const linkSobre = doc.querySelector('.link.sobre')
const modal = doc.getElementById('modal')
const modalContaine = doc.getElementById('modal-container')

linkSobre.addEventListener('click', (e) => {
  e.preventDefault()
  modalContaine.innerHTML = `
  <span id="fechar-modal" class="fechar" onclick="handleFecharModal()">X</span>

    <h1>Teste</h1>
  `
  modal.classList.add('active')

})

const handleFecharModal = (params) => {
  modal.classList.remove('active')
}
