import { getData } from "../services/requsts";

const showMoreCards = (trigger, wrapper) => {
	const btn = document.querySelector(trigger);

	btn.addEventListener("click", () => {
		getData("http://localhost:3000/styles").then((res) => {
			createCards(res).catch((e) => {
				console.log(e);
			});
		});
		btn.remove();
	});

	const createCards = (res) => {
		res.forEach(({ src, title, link }) => {
			const card = document.createElement("div");
			card.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1", "animated", "fadeUp");

			card.innerHTML = `
        <div class=styles-block>
          <img src=${src} alt>
          <h4>${title}</h4>
          <a href="${link}">Подробнее</a>
        </div>
      `;

			document.querySelector(wrapper).appendChild(card);
		});
	};
};

export default showMoreCards;
