const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Posts collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/babe");
const productsSeed = [
  {
    title: "Hue Necklace",
    seller: "Mejuri",
    short_description: "14k Yellow Gold, White Topaz",
    description:
      "This necklace is a subtle statement, indeed. A pop of color that will go with everything you own. Handcrafted in 14k solid gold with genuine white topaz gemstones. Embrace your inner artist and layer the Hue necklaces together.",
    thumbnail:
      "https://dto508s2j2p46.cloudfront.net/system/spree/products/4881/large/Hue_Necklace_White_Topaz-Single-Front.jpg?1558707721",
    price: 185,
    img_URL: [
      {
        img:
          "https://dto508s2j2p46.cloudfront.net/system/spree/products/4881/large/Hue_Necklace_White_Topaz-Single-Front.jpg?1558707721"
      },
      {
        img:
          "https://dto508s2j2p46.cloudfront.net/system/spree/products/7959/large/hue-necklace-white-topaz-cc.png?1559661449"
      },
      {
        img:
          "https://dto508s2j2p46.cloudfront.net/system/spree/products/7961/large/hue-necklace-white-topaz-side-cc.png?1559661491"
      },
      {
        img:
          "https://dto508s2j2p46.cloudfront.net/system/spree/products/7748/large/Hue_Necklace_White_Topaz-Single-Side.jpg?1558707729"
      }
    ],
    tags: "Jewelry",
    tagstwo: "Accessories"
  },
  {
    title: "Common Link Bracelet",
    seller: "MM Druck",
    short_description: "Great minds link alike.",
    description:
      "Interlocking hand-shaped links (one circle, one oval) each attach to a double stranded box chain, which meet in the middle through a classic toggle clasp. It’s all done in 18-karat gold for a simple, modernist charm bracelet that’s perfect for everyday.",
    thumbnail:
      "https://d2adyl8yz1ff2n.cloudfront.net/spree/images/attachments/000/053/905/xlarge/open-uri20191206-17381-lpkynb?1575670720",
    price: 202,
    img_URL: [
      {
        img:
          "https://d2adyl8yz1ff2n.cloudfront.net/spree/images/attachments/000/053/905/xlarge/open-uri20191206-17381-lpkynb?1575670720"
      },
      {
        img:
          "https://d2adyl8yz1ff2n.cloudfront.net/spree/images/attachments/000/053/907/xlarge/open-uri20191206-17381-ttbcfc?1575670727"
      },
      {
        img:
          "https://d2adyl8yz1ff2n.cloudfront.net/spree/images/attachments/000/053/906/xlarge/open-uri20191206-17381-odbcau?1575670724"
      }
    ],
    tags: "Jewelry",
    tagstwo: "Accessories"
  },
  {
    title: "24/7 Pima Cotton T-Shirt Bra",
    seller: "ThirdLove",
    short_description: "Day-long wear, comfortable t-shirt style bra",
    description:
      "It’s here: Our most beloved bra, now in cotton. Soft, strong, and so breathable, our 24/7™ Pima Cotton T-Shirt Bra is made with Pima cotton for a luxurious feel. Our fresh, modern design pairs perfectly with classic elements like our memory foam cups and comfortable double-layer band. It’s an everyday bra’s highest calling.",
    thumbnail:
      "https://cdn.thirdlove.com/s/files/1/0305/6249/products/CottonTShirt_StormyLilac_CottonHipster_StormyLilac_B_PDP_01_2020_1197_150x.jpg?v=1581378624",
    price: 68,
    img_URL: [
      {
        img:
          "https://cdn.thirdlove.com/s/files/1/0305/6249/products/CottonTShirt_StormyLilac_PRO_01_20203056_150x.jpg?v=1581378615"
      },
      {
        img:
          "https://cdn.thirdlove.com/s/files/1/0305/6249/products/CottonTShirt_StormyLilac_CottonHipster_StormyLilac_B_PDP_01_2020_1267_150x.jpg?v=1581378637"
      },
      {
        img:
          "https://cdn.thirdlove.com/s/files/1/0305/6249/products/CottonTShirt_StormyLilac_CottonHipster_StormyLilac_B_PDP_01_2020_1295_150x.jpg?v=1581378647"
      }
    ],
    tags: "Clothing",
    tagstwo: "Bras"
  },
  {
    title: "Eyelash Lace Plunge Bra",
    seller: "ThirdLove",
    short_description: "Plunge style lace bra",
    description:
      "Lace reinvented, we’ve transformed Parisian-inspired lace into a bra designed to appeal to you before anyone else. Created with dynamic layers of lace, sheer mesh and plunge-style memory foam cups, the Eyelash Lace Plunge forms to your breasts to give you a natural lift that can be enhanced with removable inserts. With a padded hook and eye, gold hardware and smooth band, this lace bra is your daily style starter.",
    thumbnail:
      "https://cdn.thirdlove.com/s/files/1/0305/6249/products/EyelashLacePlunge_Black_EyelashLaceThong_Black_A_PDP_08_2019_2740_150x.jpg?v=1572386416",
    price: 76,
    img_URL: [
      {
        img:
          "https://cdn.thirdlove.com/s/files/1/0305/6249/products/EyelashLacePlunge_Black_PRO_08_2019-copy_150x.jpg?v=1572386416"
      },
      {
        img:
          "https://cdn.thirdlove.com/s/files/1/0305/6249/products/EyelashLacePlunge_Black_EyelashLaceThong_Black_A_PDP_08_2019_2788_150x.jpg?v=1572386416"
      },
      {
        img:
          "https://cdn.thirdlove.com/s/files/1/0305/6249/products/EyelashLacePlunge_Black_EyelashLaceThong_Black_A_PDP_08_2019_2816-copy_150x.jpg?v=1572386416"
      }
    ],
    tags: "Clothing",
    tagstwo: "Bras"
  },
  {
    title: "Sensitive Wash",
    seller: "the Honey Pot Company",
    short_description: "Sensitive Feminine Wash",
    description:
      "Use our sensitive feminine wash to boost moisture levels, calm irritation, and balance your pH while gently cleansing your most delicate parts. No itching, no burning, no worries, girl. The formula for this intimate cleanser for sensitive skin is 100% natural and made with herbal ingredients.",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0510/5657/products/12083_021_Pink_Amazon_NEW_1296x.jpg?v=1575003796",
    price: 9.99,
    img_URL: [
      {
        img:
          "https://cdn.shopify.com/s/files/1/0510/5657/products/products_0015_washes-sensitive-travel_2ca0fc46-7d81-4fc4-bea8-a88f07ea8648_1296x.jpg?v=1570724100"
      }
    ],
    tags: "Health and Wellness",
    tagstwo: "Body Wash"
  },
  {
    title: "Soothing Body Balm",
    seller: "the Honey Pot Company",
    short_description:
      "Calm cramps and discomfort with our Soothing Body Balm.",
    description:
      "Feel aches and pains melt away as this magic formula minimizes menstrual cramps, lower back pain, foot pain, and more. This body salve is infused with natural magnesium for menstrual cramps and 500 mg of broad-spectrum hemp distillate. This hemp and magnesium body balm does not contain THC. To use the calming, pain relief salve, apply a dime-sized amount on the lower abdomen (beneath the belly button, above the pelvis), lower back, hands, or feet.",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/0510/5657/products/12211_0069_Amazon_NEW_1512x.jpg?v=1575003798",
    price: 35.99,
    img_URL: [
      {
        img:
          "https://cdn.shopify.com/s/files/1/0510/5657/products/12211_0069_Amazon_NEW_1512x.jpg?v=1575003798"
      }
    ],
    tags: "Health and Wellness",
    tagstwo: "Lotion"
  },
  {
    title: "Cardboard applicator tampons",
    seller: "MyLola",
    short_description: "Cardboard applicator tampons, 18 count",
    description:
      "No plastic, no problem. These tampons offer serious leak protection, with a smooth, curved tip applicator for added comfort.",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/2568/9396/products/LOLADP_SHOT_08-050_03_16a8cb13-ab4e-4615-a128-df07c2ed3c0e_960x822.jpg?v=1570654805",
    price: 8,
    img_URL: [
      {
        img:
          "https://cdn.shopify.com/s/files/1/2568/9396/products/LOLADP_SHOT_21-010_03_960x822.jpg?v=1570654811"
      }
    ],
    tags: "Health and Wellness",
    tagstwo: "Menstrual Products"
  },
  {
    title: "Ultra thin liners",
    seller: "MyLola",
    short_description: "Ultra thin liners, 28 count",
    description:
      "Slim, but never skimpy on leak protection. Perfect for your period’s lighter days. Or when you want an extra line of defense.",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/2568/9396/products/LOLADP_SHOT_34-010_04_960x822.jpg?v=1570655011",
    price: 9,
    img_URL: [
      {
        img:
          "https://cdn.shopify.com/s/files/1/2568/9396/products/LOLADP_SHOT_16-015_03_960x822.jpg?v=1570655018"
      }
    ],
    tags: "Health and Wellness",
    tagstwo: "Menstrual Products"
  },
  {
    title: "Flex Menstrual Cup",
    seller: "Flex",
    short_description: "Menstrual Cup",
    description:
      "Unsure about cups? Start with FLEX. Our reusable FLEX Cup makes removal easy and less messy with an adjustable pull tab that breaks the seal for you, allowing for a clean and controlled removal experience. Our super-soft, form-fitting material makes it even more comfortable for beginners. Plus, it lasts for years saving you money and creating zero waste along the way. FLEX Cup comes in two sizes so you can choose the perfect fit for your body. Not sure which one is for you? Don't stress. If your cup doesn’t fit, we've got your back. Contact us and we'll switch it out for another size. Made of velvety-soft 100% medical-grade silicone in the USA.",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/1097/9960/products/2-DetailProduct-Cup-Slim_600x551.jpg?v=1570138280",
    price: 39.99,
    img_URL: [
      {
        img:
          "https://cdn.shopify.com/s/files/1/1097/9960/files/FLEX_Cup_Image_3_Desktop_600x551.jpg?v=1570645501"
      }
    ],
    tags: "Health and Wellness",
    tagstwo: "Menstrual Products"
  },

  {
    title: "Medium Shampoo",
    seller: "Ouai",
    short_description: "Shampoo for Medium Hair",
    description:
      "Need a glow up? This hydrating shampoo nourishes with babassu and coconut oils, strengthens with keratin and adds shine with kumquat extract. Hair is left shiny, silky and flirty - so you can update that profile pic.",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/1043/7322/products/OUAI-MED-Shampoo-Web_100x75.jpg?v=1581492943",
    price: 28,
    img_URL: [
      {
        img:
          "https://cdn.shopify.com/s/files/1/1043/7322/products/OUAI-MED-Shampoo-Web_100x75.jpg?v=1581492943"
      }
    ],
    tags: "Beauty",
    tagstwo: "Hair Care"
  },
  {
    title: "Medium Conditioner",
    seller: "Ouai",
    short_description: "Conditioner for Medium Hair",
    description:
      "Feeling out of control? This hydrating conditioner makes hair (and life) easier to manage - promise. Strengthening keratin, nourishing babassu and coconut oils and kumquat extract leave hair shiny, silky and smooth. Hair so good you won't even notice that Mercury is in retrograde.",
    thumbnail:
      "https://cdn.shopify.com/s/files/1/1043/7322/products/OUAI-MED-Shampoo-Web_100x75.jpg?v=1581492943",
    price: 28,
    img_URL: [
      {
        img:
          "https://cdn.shopify.com/s/files/1/1043/7322/products/OUAI-MED-Conditioner-Web_1000x750.jpg?v=1581492925"
      }
    ],
    tags: "Beauty",
    tagstwo: "Hair Care"
  }
];

const wellnessSeed = [
  {
    title: "Lola",
    source: "https://mylola.com",
    description: "reproductive care by women, for women",
    thumbnail_url:
      "https://cdn.shopify.com/s/files/1/2568/9396/t/3/assets/tampons-hand-desktop-1562940697247.jpg",
    tags: "Health and Wellness"
  },
  {
    title: "Dr. Jen Gunter",
    source: "https://drjengunter.com/",
    description:
      "Wielding the Lasso of Truth | I am an OB/GYN and a pain medicine physician. I write a lot about sex, science, and social media, but sometimes I write about other things because, well, why not?",
    thumbnail_url:
      "https://drjengunter.files.wordpress.com/2019/07/jen-gunter-headshot-tinified.jpg",
    tags: "Health and Wellness"
  }
];

const newsSeed = [
  {
    title: "Lab-Grown Breast Milk: Why?",
    publisher: "The Atlantic",
    source:
      "https://medium.com/the-atlantic/lab-grown-breast-milk-why-5ff1dd6e41c5",
    description:
      "The obsession with breastfeeding has inspired a start-up to make human milk outside the human body.",
    thumbnail_url: "https://miro.medium.com/max/1920/0*bG2exTRrmq4udarA.jpg"
  }
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

db.Wellness.remove({})
  .then(() => db.Wellness.collection.insertMany(wellnessSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.News.remove({})
  .then(() => db.News.collection.insertMany(newsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
