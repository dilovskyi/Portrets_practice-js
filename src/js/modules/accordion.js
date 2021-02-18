const accordion = (triggersSelector) => {
	const btns = document.querySelectorAll(triggersSelector);

	btns.forEach((element) => {
		element.addEventListener("click", function (e) {

			const content = this.nextElementSibling;
			this.classList.toggle("active-style");
			content.classList.toggle("active-content");
			// content.classList.add('"animated", "fadeInDown"');

			if (this.classList.contains("active-style")) {
				content.style.maxHeight = content.scrollHeight + 80 + "px";
			} else {
				content.style.cssText = "max-height: 0px;";
			}
		});
	});

	// const blocks = document.querySelectorAll(itemsSelector);

	// blocks.forEach((item) => {
	// 	item.classLisk.add("animated", "fadeInDown");
	// });

	// btns.forEach((item) => {
	// 	item.addEventListener("click", function () {
	// 		if (!this.classList.contains("active")) {
	// 			btns.forEach((btn) => {
	// 				btn.classList.remove("active", "active-style");
	// 			});
	// 			this.classList.add("active", "active-style");
	// 		}
	// 	});
	// });
};

export default accordion;
