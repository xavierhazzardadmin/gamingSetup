const items = document.querySelectorAll(".item");
const btn = document.querySelector("#submit");

btn.addEventListener("click", () => {
	const color = document.querySelector("#colorPicker").value;

	setTimeout(() => {
		for (let i = 0; i < items.length; i++) {
			items[i].style.backgroundColor = color;
		}
	}, 700);
});

function createItem() {
	//write function to create a new element
	//think about classes you need and add them at the extends
}
