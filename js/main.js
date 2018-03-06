//mobile menu
document.querySelector(".page-header__toggle").onclick = function () {
	this.classList.toggle("change");

	var x = document.querySelector(".page-header__nav");
	if (x.className === "page-header__nav") {
		x.className += " responsive";
	} else {
		x.className = "page-header__nav";
	}
};


//scroll menu
var menu = document.querySelector(".page-header");
var topHeight = 1;

window.onscroll = function() {
	if (menu.classList.contains("page-header_dark") && window.pageYOffset < topHeight) {
		menu.classList.remove("page-header_dark");
	} else if (window.pageYOffset > topHeight) {
		menu.classList.add("page-header_dark");
	}
};







