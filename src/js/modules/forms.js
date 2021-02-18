import { postData } from "../services/requsts";

const form = () => {
	const forms = document.querySelectorAll("form");
	const inputs = document.querySelectorAll("input");
	const upload = document.querySelectorAll("[name=upload]");

	const message = {
		loading: "Загрузка...",
		success: "Спасибо! Скоро мы с Вами свяжемся",
		failure: "Что-то пошло не так...",
		spinner: "assets/img/spinner.gif",
		ok: "assets/img/ok.png",
		fail: "assets/img/fail.png",
	};

	const path = {
		designer: "assets/server.php",
		questions: "assets/questions.php",
	};

	const clearInputs = () => {
		inputs.forEach((input) => {
			input.value = "";
		});
		upload.forEach((item) => {
			item.previousElementSibling.textContent = "Файл не выбран";
		});
	};

	upload.forEach((item) => {
		item.addEventListener("input", () => {
			let nameArr = item.files[0].name.split(".");
			if (nameArr[0].length > 8) {
				nameArr[0] = nameArr[0].slice(0, 7) + "...";
			}
			item.previousElementSibling.textContent = nameArr[0] + "." + nameArr[nameArr.length - 1];
		});
	});

	forms.forEach((form) => {
		form.addEventListener("submit", (e) => {
			e.preventDefault();

			let statusMessage = document.createElement("div");
			statusMessage.classList.add("status");
			form.parentNode.append(statusMessage);
			form.classList.add("animated", "fadeOutUp");
			setTimeout(() => {
				form.style.display = "none";
			}, 400);

			let statusImg = document.createElement("img");
			statusImg.setAttribute("src", message.spinner);
			statusImg.classList.add("animated", "fadeInUp");
			statusMessage.append(statusImg);

			let textMessage = document.createElement("div");
			textMessage.textContent = message.loading;
			statusMessage.append(textMessage);

			const formData = new FormData(form);
			let api = null;

			if (form.closest(".popup-design") || form.classList.contains("calc_form")) {
				api = path.designer;
			} else {
				api = path.questions;
			}

			postData(api, formData)
				.then((res) => {
					console.log(res);
				})
				.then(() => {
					statusImg.setAttribute("src", message.ok);
					textMessage.textContent = message.success;
				})
				.catch(() => {
					textMessage.textContent = message.failure;
					statusImg.setAttribute("src", message.fail);
				})
				.finally(() => {
					clearInputs();
					setTimeout(() => {
						statusMessage.remove();
						form.style.display = "block";
						form.classList.remove("fadeOutUp");
						form.classList.add("fadeInUp");
					}, 5000);
				});
		});
	});
};

export default form;
