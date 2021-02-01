const express = require("express");
const app = express();
const PORT = process.env.PORT || 5005;
const bodyparser = require("body-parser");
const fs = require("fs");

const options = {};
//middleware
app.use(express.static("public", options));
app.use(bodyparser.urlencoded({ extended: true }));
app.listen(PORT);

const index = `${__dirname}/public/index.html`;

app.get("/", (req, res) => {
	res.sendFile(index);
	o;
});

app.post("/", (req, res) => {
	if (req.body.hasOwnProperty("color")) {
		const { color } = req.body;
		if (color) {
			const css = `.bgColor {background-color: ${color}}`;
			fs.writeFileSync(`${__dirname}/public/color.css`, css);
			res.header("Content-Type", "text/html");
			res.sendFile(index);
			return;
		}
		res.end("Please choose a color!");
	}
	return;
});
