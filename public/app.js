var btn = document.getElementById("submit");
const addItem = document.querySelector("#addItem");
const totalView = document.querySelector("#total");
// const totalText = document.querySelectorAll(".total")[0];
const textShow = document.querySelector("#textShow");
var total = 0;
var text = false;

// btn.addEventListener("click", (e) => {
// 	e.preventDefault();
// });
addItem.addEventListener("click", () => {
	const name = document.querySelector("#itemName");
	const price = document.querySelector("#itemPrice");
	const imgLink = document.querySelector("#itemImg");

	if (price.value && price.value) {
		setTimeout(() => {
			createItem(name.value, price.value, 500, imgLink.value);
			name.value = "";
			price.value = "";
			imgLink.value = "";
		}, 200);
	}
});

addEventListener("keydown", (e) => {
	const name = document.querySelector("#itemName");
	const price = document.querySelector("#itemPrice");
	const imgLink = document.querySelector("#itemImg");
	if (e.key == "Enter" && price.value && price.value) {
		setTimeout(() => {
			createItem(name.value, price.value, 500, imgLink.value);
			name.value = "";
			price.value = "";
			imgLink.value = "";
		}, 200);
	}
});

function showTotal() {
	var op = 0;
	while (op <= 100) {
		setInterval(() => {
			console.log("worked");
		}, 100);
	}
}

function createItem(name, price, budget, img) {
	var body = document.querySelectorAll(".items")[0];
	var div = document.createElement("div");
	var p1 = document.createElement("p");
	var p2 = document.createElement("p");
	var p3 = document.createElement("p");
	var save = document.createElement("button");
	div.classList.add("item");
	p1.classList.add("top");
	p2.classList.add("middle");
	p3.classList.add("bottom");
	save.classList.add("saveBtn");
	if (img) {
		console.log(img);
		var image = document.createElement("img");
		image.src = img;
		image.classList.add("img");
		div.classList.add("pic");
		div.classList.remove("item");
		div.appendChild(image);
	}
	var nameSpan = `<span class="value">${name}</span>`;
	var priceSpan = `<span class="value">£${price}</span>`;
	var savingsSpan = `<span class="value">£${budget - price}</span>`;
	p1.innerHTML = `Name: ${nameSpan}`;
	p2.innerHTML = `Price: ${priceSpan}`;
	p3.innerHTML = `Savings: ${savingsSpan}`;
	save.innerHTML = `<i class="fas fa-trash-alt"></i>`;
	//add text to each item
	div.appendChild(p1);
	div.appendChild(p2);
	div.appendChild(p3);
	div.appendChild(save);
	body.appendChild(div);
    div.classList.add("show");
	total += Number(price);
	totalView.innerHTML = total;
	save.addEventListener("click", function () {
		setTimeout(() => {
            this.parentElement.classList.add("hide");
			this.parentElement.remove();
			total -= Number(price);
			totalView.innerHTML = total;
            if(total == 0){
                textShow.classList.remove("show");
                textShow.classList.add("hide");
            }
		});
	});
	textShow.classList.add("show");
}

// createItem("1440p Monitor", 400, 0);
