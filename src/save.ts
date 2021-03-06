import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.connect(
    "mongodb://localhost:27017/test",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;

function logDB(err: any, arr: any[]) {
    if (err) return console.error(err);
    arr.forEach((elem) => {
        console.log(elem);
    });
    return 0;
}

db.on(
    "error",
    console.error.bind(
        console,
        "connection error:"
    )
);

db.once("open", () => {
    const newItem = new Schema({
        Type: String,
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
        Type: "item",
        name: "Pro Display XDR",
        price: 1000,
        url: "https://apple.com/uk",
        picUrl: "",
    });

    item1.save().then(() => {
        console.log("saved");
        Item.find(
            { Type: "item" },
            logDB
        );
    });
});

/**
 * Creates the schema
 * @param {string} name
 * @param {number} price
 * @param {string} url
 * @param {string} picUrl
 */

// function addItem(
//     name: string,
//     price: number,
//     url: string,
//     picUrl: string
// ) {
//     // @ts-ignore
//     const doc = new Item({
//         name,
//         price,
//         url,
//         picUrl,
//     });
//     // save then re-render the page
//     doc.save().then(() => {
//         // res.render();
//     });
// }
