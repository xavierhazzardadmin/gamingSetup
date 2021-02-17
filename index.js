const express = require("express");
const app = express();
const PORT = process.env.PORT || 5005;
const bodyparser = require("body-parser");

const options = {};
var items = [];
var budget = 5000;
var total = 0;
//middleware
app.use(express.static("public", options));
app.use(bodyparser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.listen(PORT, console.log(`Server started on ${PORT}`));

const index = `${__dirname}/public/index.html`;

app.get("/", (req, res) => {
	res.render("index", { items: items, total: total });
});

app.post("/additem", (req, res) => {
	const { Item, Price, itemLink, imgLink } = req.body;
	total += parseInt(Price);
	const newItem = {
		name: Item,
		cost: Price,
		link: itemLink,
		imgLink: imgLink,
		amountLeft: budget - parseInt(Price),
	};

	budget -= parseInt(Price);

	items.push(newItem);
	res.redirect("/");
});
