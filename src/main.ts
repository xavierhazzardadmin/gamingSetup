import express from "express";
import returnItems from "@/ts/externals";
import mongoose from "mongoose";

const { Schema } = mongoose;

const app = express();
const PORT: number = 3000;

const items: any[] = [];

mongoose.connect(
    "mongodb://localhost:27017/test",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;

db.on(
    "error",
    console.error.bind(
        console,
        "connection error:"
    )
);

db.once("open", () => {
    /**
     * Creates the schema
     * @param {string} name
     * @param {number} price
     * @param {string} url
     * @param {string} picUrl
     */
    const newItem = new Schema({
        name: String,
        price: Number,
        url: String,
        picUrl: String,
    });

    const Item = mongoose.model(
        "Item",
        newItem
    );

    const item1 = new Item({
        name,
        price: 1000,
        url: "https://apple.com/uk",
        picUrl: "",
    });

    item1.save().then(() => {
        console.log("saved");
        Item.find(
            { Type: "item" },
            returnItems
        );
    });
});

let budget: number = 5000;
let total: number = 0;
//    middleware

app.use(express.static("public"));

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
    /**
     * Render the file with items and total
     * @param {array} items
     * @param {number} total
     */
    res.render("index", {
        items,
        total,
    });
});

app.post("/additem", (req, res) => {
    /**
     * Adding the item to the DB
     * @param {number} _id
     * @param {string} Name
     * @param {number} Price
     * @param {string} itemLink
     * @param {string} imgLink?
     * Creates a new instance of the model Item
     * which allows for it to be added to the DB
     *
     * Add the price of the item to the total var
     * Refresh the page with the updated items list
     */
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
