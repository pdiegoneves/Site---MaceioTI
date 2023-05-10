const doc = document
const linkSobre = doc.querySelector('.link.sobre')
const modal = doc.getElementById('modal')
const fecharModal = doc.getElementById('#fechar-modal')

linkSobre.addEventListener('click', (e) => {
  e.preventDefault()
  modal.innerHTML += `
    <h1>Teste</h1>
  `
  modal.classList.add('active')

})

// fecharModal.addEventListener('click', () => {
//   alert("teste")

//   // modal.classList.remove('active')
// })
