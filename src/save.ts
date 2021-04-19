import mongoose from "mongoose";

const { Schema } = mongoose;
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

function addItem(
    name: string,
    price: number,
    url: string,
    picUrl: string
) {
    // @ts-ignore
    const doc = new Item(
        name,
        price,
        url,
        picUrl
    );
}
