function menuClick() {
	console.log('click');
	document.getElementById('slider').style.width = '100vw';
	document.getElementById('mobileNav').style.display = 'flex';
}
function menuClose() {
	document.getElementById('slider').style.width = '0';
	document.getElementById('mobileNav').style.display = 'none';
}
