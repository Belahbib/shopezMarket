const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    product_Name: { type: String, required: true },
    product_Price: { type: Number, required: true },
    product_Description: { type: String, required: true },
    product_Images: [{ type: String, required: true }],
    product_Category: {
      type: String,
      enum: [
        "Veichule",
        "clothing",
        "Property Rentals",
        "Apparel",
        "Digital",
        "Electronics",
        "Pet Supplies",
        "Home Sales",
        "Musical instruments",
      ],
    },
    product_City: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User" },
    incart: [{ type: Schema.Types.ObjectId, ref: "User" }]
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
