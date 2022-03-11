const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
const Category = new Schema({
    name: { type: String, required: true },
    movie: [{ type: Schema.Types.ObjectId, ref: 'Movie' }],
    slug: { type: String, slug: "name", unique: true }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Category", Category);
