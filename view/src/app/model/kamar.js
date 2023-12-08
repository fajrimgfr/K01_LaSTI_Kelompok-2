// Import library
const mongoose = require("mongoose");

// Schema Kamar
const Kamar = new mongoose.Schema(
  {
    noKamar: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
      required: true,
    },
    harga: {
      type: Number,
      required: true,
    },
    lantai: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    fasilitas: {
      type: String,
      required: true,
    },
    luas: {
      type: String,
      required: true,
    },
    posisi: {
      type: String,
      required: true,
    },
    idUser: {
      type: String,
      required: true,
    },
    namaUser: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Export
mongoose.models = {};
module.exports = mongoose.model("Kamar", Kamar);
