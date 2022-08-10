document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const navCollapse = document.querySelector('.navbar-collapse')
	const allNavItems = document.querySelectorAll('.nav-link')

	function addShadow() {
		if (window.scrollY >= 150) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	function closeNavbar() {

		if(navCollapse.classList.contains('show')){
			navCollapse.classList.remove('show')
		}	

	}

	document.addEventListener('click', closeNavbar)

	window.addEventListener('scroll', addShadow)
})
