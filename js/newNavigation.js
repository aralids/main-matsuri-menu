const isTouchDevice =
	"ontouchstart" in window || navigator.msMaxTouchPoints > 0;

const handleNavMouseOver = (e) => {
	if (window.innerWidth >= 992 && !isTouchDevice) {
		const arr = Object.values(e.target.parentNode.childNodes);
		let div = arr.filter((item) => {
			return item.nodeName === "DIV";
		});
		div = div[0];
		div.classList.add("show");
		div.setAttribute("data-bs-popper", "static");
	}
};

const handleNavMouseOut = (e) => {
	if (window.innerWidth >= 992 && !isTouchDevice) {
		const arr = Object.values(e.target.parentNode.childNodes);
		let div = arr.filter((item) => {
			return item.nodeName === "DIV";
		});
		div = div[0];
		div.classList.remove("show");
	}
};

const handleHamburgerClick = (e) => {
	document.getElementById("main-navbar").classList.toggle("navbar-opaque");
	document.getElementById("sec-navbar").classList.toggle("navbar-opaque");
};
