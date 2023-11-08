const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-button');
const navBtnImg = document.querySelector('#nav-btn-img');
const body = document.querySelector('body');

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
		navBtnImg.src = 'img/icons/nav-close.svg';
		body.style.overflow = 'hidden';
	} else {
		navBtnImg.src = 'img/icons/nav.svg';
		body.style.overflow = 'auto';
	}
}