let index = document.querySelector('.index')
let scrollDown = document.querySelector('.down-icon-img')

scrollDown.addEventListener('click', function () {
	setTimeout(() => {
		index.classList.add('overflow')
	}, 500)
})
