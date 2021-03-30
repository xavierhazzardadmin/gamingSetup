const express = require("express");

const app = express();
const PORT = process.env.PORT || 5005;

const options = {};
const items = [];

let budget = 5000;
let total = 0;
//    middleware

app.use(
    express.static("public", options)
);
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.set("view engine", "ejs");
app.listen(
    PORT,
    console.log(
        `Server started on ${PORT}`
    )
);

app.get("/", (req, res) => {
    res.render("index", {
        items,
        total,
    });
});

app.post("/additem", (req, res) => {
    const {
        Item,
        Price,
        itemLink,
        imgLink,
    } = req.body;
    total += parseFloat(Price, 10);
    const newItem = {
        name: Item,
        cost: Price,
        link: itemLink,
        imgLink,
        amountLeft:
            budget -
            parseFloat(Price, 10),
    };

    budget -= parseFloat(Price, 10);

    items.push(newItem);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const { index } = req.body;
    const i = parseInt(index, 10);

    items.splice(i, 1);
    res.redirect("/");
});
