const filter = () => {
	const menu = document.querySelector(".portfolio-menu");
	const items = menu.querySelectorAll("li");
	const btnAll = menu.querySelector(".all");
	const btnLovers = menu.querySelector(".lovers");
	const btnChef = menu.querySelector(".chef");
	const btnGirl = menu.querySelector(".girl");
	const btnGuy = menu.querySelector(".guy");
	const btnGrandmother = menu.querySelector(".grandmother");
	const grandDad = menu.querySelector(".granddad");
	const wrapper = document.querySelector(".portfolio-wrapper");
	const markAll = wrapper.querySelectorAll(".all");
	const markGirl = wrapper.querySelectorAll(".girl");
	const markLovers = wrapper.querySelectorAll(".lovers");
	const markGuy = wrapper.querySelectorAll(".guy");
	const markChef = wrapper.querySelectorAll(".chef");
	const no = document.querySelector(".portfolio-no");

	const typeFilter = (markType) => {
		markAll.forEach((item) => {
			item.style.display = "none";
			item.classList.remove("animated", "fadeIn");
		});
		no.style.display = "none";
		no.classList.remove("animated", "fadeIn");

		if (markType) {
			markType.forEach((item) => {
				item.style.display = "block";
				item.classList.add("animated", "fadeIn");
			});
		} else {
			no.style.display = "block";
			no.classList.add("animated", "fadeIn");
		}
	};

	const addEvent = (trigger, elem) => {
		trigger.addEventListener("click", () => {
			typeFilter(elem);
		});
	};

	addEvent(btnAll, markAll);
	addEvent(btnLovers, markLovers);
	addEvent(btnChef, markChef);
	addEvent(btnGirl, markGirl);
	addEvent(btnGuy, markGuy);

	addEvent(btnGrandmother);
	addEvent(grandDad);

	menu.addEventListener("click", (e) => {
		let target = e.target;
		if (target && target.tagName == "LI") {
			items.forEach((item) => {
				item.classList.remove("active");
			});
			target.classList.add("active");
		}
	});
};

export default filter;
