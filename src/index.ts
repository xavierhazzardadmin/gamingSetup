import express from "express";

const app = express();
const PORT = process.env.PORT || 5005;

interface listItem {
    name: string;
    cost: number;
    link: string;
    imgLink?: string;
    amountLeft: number;
}

const options = {};
const items: listItem[] = [];

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

app.listen(PORT, () => console.log(
    `Server started on ${PORT}`
));

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
    total += parseFloat(Price);
    const newItem: listItem = {
        name: Item,
        cost: Price,
        link: itemLink,
        imgLink,
        amountLeft:
            budget - parseFloat(Price),
    };

    budget -= parseFloat(Price);

    items.push(newItem);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const { index } = req.body;
    const i: number = parseInt(
        index,
        10
    );

    total -= items[i].cost;
    console.log(total);

    items.splice(i, 1);
    res.redirect("/");
});
