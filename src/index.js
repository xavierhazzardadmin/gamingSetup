"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = process.env.PORT || 5005;
const options = {};
let items;
let budget = 5000;
let total = 0;
//    middleware
app.use(express_1.default.static("public", options));
app.use(express_1.default.urlencoded({
    extended: true,
}));
app.set("view engine", "ejs");
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
app.get("/", (req, res) => {
    res.render("index", {
        items,
        total,
    });
});
app.post("/additem", (req, res) => {
    const { Item, Price, itemLink, imgLink, } = req.body;
    total += parseFloat(Price, 10);
    const newItem = {
        name: Item,
        cost: Price,
        link: itemLink,
        imgLink,
        amountLeft: budget -
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
