const displayBio = document.querySelectorAll('[data-pop-up-target]')
const closeBio = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementsById('overlay')

displayBio.forEach(button => {
  button.addEventListener('click', () => {
    const pop_up = document.querySelector(button.dataset.pop_upTarget)
    openPopUp(pop_up)
  })
})

overlay.addEventListener('click', () => {
  const pop_ups = document.querySelectorAll('.pop_up.active')
  pop_ups.forEach(pop_up => {
    closePopUp(pop_up)
  })
})

closeBio.forEach(button => {
  button.addEventListener('click', () => {
    const pop_up = button.closest('.pop_up')
    closePopUp(pop_up)
  })
})

function openPopUp(pop_up) {
  if (pop_up == null) return
  pop_up.classList.add('active')
  overlay.classList.add('active')
}

function closePopUp(pop_up) {
  if (pop_up == null) return
  pop_up.classList.remove('active')
  overlay.classList.remove('active')
}
