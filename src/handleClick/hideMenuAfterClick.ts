export default function hideMenuAfterClick() {
	let menu: any = document.querySelector('[data-type~=menu]');
	if (!menu.classList.contains('hiden')) {
		menu.classList.add('hiden');
	}
}
