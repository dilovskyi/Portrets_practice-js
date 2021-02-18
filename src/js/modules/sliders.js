const sliders = (slides, dir, prev, next) => {
	const items = document.querySelectorAll(slides);
	let slideIndex = 1;
	let paused = false;

	const showSlides = (n) => {
		if (n > items.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = items.length;
		}
		items.forEach((item) => {
			item.classList.add("animated");
			item.style.display = "none";
		});
		items[slideIndex - 1].style.display = "block";
	};

	const changeSlides = (n) => {
		showSlides((slideIndex += n));
	};

	const activateAnimation = () => {
		if (dir == "vertical") {
			paused = setInterval(() => {
				changeSlides(1);
				items[slideIndex - 1].classList.add("slideInDown");
			}, 10000000000);
		} else {
			paused = setInterval(() => {
				changeSlides(1);
				items[slideIndex - 1].classList.add("slideInRight");
				items[slideIndex - 1].classList.remove("slideInLeft");
			}, 10000000000);
		}
	};

	try {
		const nextBtn = document.querySelector(next);
		const prevBtn = document.querySelector(prev);

		nextBtn.addEventListener("click", () => {
			changeSlides(1);
			items[slideIndex - 1].classList.remove("slideInLeft");
			items[slideIndex - 1].classList.add("slideInRight");
		});
		prevBtn.addEventListener("click", () => {
			changeSlides(-1);
			items[slideIndex - 1].classList.add("slideInLeft");
			items[slideIndex - 1].classList.remove("slideInRight");
		});
	} catch (e) {}

	items[0].parentNode.addEventListener("mouseover", () => {
		clearInterval(paused);
	});
	items[0].parentNode.addEventListener("mouseleave", () => {
		activateAnimation();
	});

	showSlides(slideIndex);
	activateAnimation();
};

export default sliders;
