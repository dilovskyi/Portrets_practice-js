const drop = () => {
	const fileInputs = document.querySelectorAll('[name="upload"]');
	["dragenter", "dragleave", "dragover", "drop"].forEach((eventName) => {
		fileInputs.forEach((input) => {
			input.addEventListener(eventName, preventDefault, false);
		});
	});
	function preventDefault(e) {
		e.preventDefault();
		e.stopPropagation();
	}
	function highlight(item) {
		item.closest(".file_upload").style.border = "5px solid yellow";
		item.closest(".file_upload").style.backgroundColor = "rbga(0,0,0 .7)";
	}
	function unHighlight(item) {
		item.closest(".file_upload").style.border = "";
		item.closest(".file_upload").style.backgroundColor = "#ededed";
	}
	["dragenter", "dragover"].forEach((eventName) => {
		fileInputs.forEach((input) => {
			input.addEventListener(
				eventName,
				() => {
					highlight(input);
				},
				false
			);
		});
	});
	["dragleave", "drop"].forEach((eventName) => {
		fileInputs.forEach((input) => {
			input.addEventListener(
				eventName,
				() => {
					unHighlight(input);
				},
				false
			);
		});
	});
	fileInputs.forEach((input) => {
		input.addEventListener("drop", (e) => {
			input.files = e.dataTransfer.files;
			let nameArr = input.files[0].name.split(".");
			if (nameArr[0].length > 8) {
				nameArr[0] = nameArr[0].slice(0, 7) + "...";
			}
			input.previousElementSibling.textContent = nameArr[0] + "." + nameArr[nameArr.length - 1];
		});
	});
};

export default drop;
