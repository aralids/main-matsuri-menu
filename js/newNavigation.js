const isTouchDevice =
	"ontouchstart" in window || navigator.msMaxTouchPoints > 0;

const handleMouseOver = (e) => {
	if (window.innerWidth >= 992 && !isTouchDevice) {
		let arr = Object.values(e.target.parentNode.childNodes);
		let div = arr.filter((item) => {
			return item.nodeName === "DIV";
		});
		let a = arr.filter((item) => {
			return item.nodeName === "A";
		});
		div = div[0];
		a = a[0];
		div.classList.add("show");
		div.setAttribute("data-bs-popper", "static");
	}
};

const handleMouseOut = (e) => {
	if (window.innerWidth >= 992 && !isTouchDevice) {
		let arr = Object.values(e.target.parentNode.childNodes);
		let div = arr.filter((item) => {
			return item.nodeName === "DIV";
		});
		let a = arr.filter((item) => {
			return item.nodeName === "A";
		});
		div = div[0];
		a = a[0];
		div.classList.remove("show");
	}
};

const handleHamburgerClick = (e) => {
	document.getElementById("main-navbar").classList.toggle("navbar-opaque");
	document.getElementById("sec-navbar").classList.toggle("navbar-opaque");
};
