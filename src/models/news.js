const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true, // Elimina espacios en blanco al principio y al final
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    introduction: {
      type: String,
      required: true,
      trim: true,
    },
    climax: {
      type: String,
      required: true,
      trim: true,
    },
    conclusion: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, // Añade automáticamente los campos createdAt y updatedAt
  }
);

module.exports = mongoose.model("News", newsSchema, "news"); // Exporta el modelo y la colección
