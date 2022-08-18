const ratingCard = document.querySelector('.rating-card')
const thankYouCard = document.querySelector('.thank-you-card')
const ratingSubmit = document.querySelector('#rating-submit')
const ratingButtons = document.querySelectorAll('.rating-btn')
const ratingNumber = document.querySelector('#rating-number')

ratingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        ratingNumber.innerHTML = btn.innerHTML
        ratingSubmit.removeAttribute('disabled')
    })


})
ratingSubmit.addEventListener('click', () => {
    ratingCard.style.display = 'none'
    thankYouCard.classList.add('show')
})