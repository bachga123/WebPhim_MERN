const { text } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Movie = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    caster: { type: String, maxlength: 1024 },
    description: { type: String, required: true },
    duration_min: { type: Number },
    slug: { type: String, slug: "title", unique: true },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Movie", Movie);
