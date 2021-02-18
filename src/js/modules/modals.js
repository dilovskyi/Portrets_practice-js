const modals = () => {
	let scroll = calcScroll();
	let btnPressed = false;
	function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
		const trigger = document.querySelectorAll(triggerSelector);
		const modal = document.querySelector(modalSelector);
		const close = document.querySelector(closeSelector);
		const windows = document.querySelectorAll("[data-modal]");

		function hideAllModals() {
			windows.forEach((item) => {
				item.style.display = "none";
			});
		}

		trigger.forEach((item) => {
			item.addEventListener("click", (e) => {
				btnPressed = true;
				if (e.target) {
					e.preventDefault();
				}
				if (destroy) {
					item.remove();
				}
				hideAllModals();
				modal.style.display = "block";
				document.body.style.overflow = "hidden";
				document.body.style.marginRight = `${scroll}px`;
			});
		});

		close.addEventListener("click", () => {
			modal.style.display = "none";
			document.body.style.overflow = "unset";
			hideAllModals();
			document.style.marginRight = `0px`;
		});

		modal.addEventListener("click", (e) => {
			if (e.target === modal) {
				modal.style.display = "none";
				document.body.style.overflow = "unset";
				hideAllModals();
				document.body.style.marginRight = `0px`;
			}
		});
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			let display = null;
			document.querySelectorAll("[data-modal]").forEach((item) => {
				if (getComputedStyle(item).getPropertyValue("display") !== "none") {
					display = "block";
				}
			});
			if (!display) {
				console.log(typeof display);
				document.querySelector(selector).style.display = "block";
				document.body.style.overflow = "hidden";
				document.body.style.marginRight = `${scroll}px`;
			}
		}, time);
	}

	function calcScroll() {
		const div = document.createElement("div");
		div.style.width = "100%";
		div.style.height = "100%";
		div.style.overflowY = "scroll";
		div.style.visibility = "hidden";
		div.style.backgroundColor = "red";
		document.body.append(div);

		const scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		return scrollWidth;
	}

	function openByScroll(selector) {
		window.addEventListener("scroll", () => {
			if (
				!btnPressed &&
				window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight
			) {
				document.querySelector(selector).click();
			}
		});
	}

	bindModal(".button-design", ".popup-design", ".popup-design .popup-close");
	bindModal(".button-consultation", ".popup-consultation", ".popup-consultation .popup-close");
	bindModal(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true);
	openByScroll(".fixed-gift");
	// showModalByTime(".popup-consultation", 60000);
};

export default modals;
