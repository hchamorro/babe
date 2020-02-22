const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Posts collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/babe");
const productsSeed = [
  {
    title: "Hue Necklace",
    seller: "Mejuri",
    short_description: "14k Yellow Gold, White Topaz",
    description: "This necklace is a subtle statement, indeed. A pop of color that will go with everything you own. Handcrafted in 14k solid gold with genuine white topaz gemstones. Embrace your inner artist and layer the Hue necklaces together.",
    thumbnail: "https://dto508s2j2p46.cloudfront.net/system/spree/products/4881/large/Hue_Necklace_White_Topaz-Single-Front.jpg?1558707721",
    price: 185,
    img_URL: [
        {img: "https://dto508s2j2p46.cloudfront.net/system/spree/products/4881/large/Hue_Necklace_White_Topaz-Single-Front.jpg?1558707721"},
        {img: "https://dto508s2j2p46.cloudfront.net/system/spree/products/7959/large/hue-necklace-white-topaz-cc.png?1559661449"},
        {img: "https://dto508s2j2p46.cloudfront.net/system/spree/products/7961/large/hue-necklace-white-topaz-side-cc.png?1559661491"},
        {img: "https://dto508s2j2p46.cloudfront.net/system/spree/products/7748/large/Hue_Necklace_White_Topaz-Single-Side.jpg?1558707729"}
    ]
  },
  {
    title: "Common Link Bracelet",
    seller: "MM Druck",
    short_description: "Great minds link alike.",
    description: "Interlocking hand-shaped links (one circle, one oval) each attach to a double stranded box chain, which meet in the middle through a classic toggle clasp. It’s all done in 18-karat gold for a simple, modernist charm bracelet that’s perfect for everyday.",
    thumbnail: "https://d2adyl8yz1ff2n.cloudfront.net/spree/images/attachments/000/053/905/xlarge/open-uri20191206-17381-lpkynb?1575670720",
    price: 202,
    img_URL: [
        {img: "https://d2adyl8yz1ff2n.cloudfront.net/spree/images/attachments/000/053/905/xlarge/open-uri20191206-17381-lpkynb?1575670720"},
        {img: "https://d2adyl8yz1ff2n.cloudfront.net/spree/images/attachments/000/053/907/xlarge/open-uri20191206-17381-ttbcfc?1575670727"},
        {img: "https://d2adyl8yz1ff2n.cloudfront.net/spree/images/attachments/000/053/906/xlarge/open-uri20191206-17381-odbcau?1575670724"},
    ]
  },

];
db.Product.remove({})
  .then(() => db.Product.collection.insertMany(productsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });