var btn = document.getElementById("submit");
const addItem = document.querySelector("#addItem");

addItem.addEventListener("click", () => {
	const name = document.querySelector("#itemName");
	const price = document.querySelector("#itemPrice");

	if (price.value && price.value) {
		setTimeout(() => {
			createItem(name.value, price.value, 500);
		}, 200);
	}
});

function createItem(name, price, budget) {
	var div = document.createElement("div");
	var p1 = document.createElement("p");
	var p2 = document.createElement("p");
	var p3 = document.createElement("p");
	var save = document.createElement("button");
	div.classList.add("item", "bgColor");
	p1.classList.add("top");
	p2.classList.add("middle");
	p3.classList.add("bottom");
	save.classList.add("saveBtn");
	var nameSpan = `<span class="value">${name}</span>`;
	var priceSpan = `<span class="value">${price}</span>`;
	var savingsSpan = `<span class="value">${budget - price}</span>`;
	p1.innerHTML = `Name: ${nameSpan}`;
	p2.innerHTML = `Price: ${priceSpan}`;
	p3.innerHTML = `Savings: ${savingsSpan}`;
	save.innerHTML = `Save`;
	//add text to each item
	div.appendChild(p1);
	div.appendChild(p2);
	div.appendChild(p3);
	div.appendChild(save);
	document.body.appendChild(div);
}

// createItem("1440p Monitor", 400, 0);
