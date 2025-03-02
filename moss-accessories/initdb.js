const sql = require("better-sqlite3");
const db = sql("accessories.db");

const mossAccessories = [
  {
    title: "Olive ribbed Socks",
    price: "8.95",
    image_one: "/images/socks/olive-socks_01.webp",
    image_two: "/images/socks/olive-socks_02.jpg",
    image_three: "/images/socks/olive-socks_02.jpg",
    image_four: "/images/socks/olive-socks_02.jpg",
    image_five: "/images/socks/olive-socks_02.jpg",
    product_code: "966762036",
    description: `
    Mercerising cotton makes what's already pretty great even better.

    That's why these ribbed Moss socks are rich in the fibres, bringing you comfort, softness, breathability and a rich olive tone that'll last.`,

    features: `
        Mercerised finish for softness

        Ribbed construction

        One Size: 7-11`,

    fabric_care: `
        70% Mercerised Cotton
        29% Polyester
        1% Elastane

Machine washable at 30 degrees`,

  },
  {
    title: "Light Blue Fined Ribbed Socks",
    price: "8.95",
    product_code: "966885702",
    image_one: "/images/socks/light_blue_socks_01.webp",
    image_two: "/images/socks/light_blue_socks_02.jpg",
    image_three: "/images/socks/light_blue_socks_02.jpg",
    image_four: "/images/socks/light_blue_socks_02.jpg",
    image_five: "/images/socks/light_blue_socks_02.jpg",
    description: `
        Because we all know   the devil's in the detail, pick up Moss' light-blue socks - crafted in a blend that's rich in mercerised cotton for a softness that feels and looks a cut above.

        They have a soft rib for a gentle grip and a tonal logo on the sole.`,
    features: `Branded sole

        Soft fabric

        Ribbed construction

        One Size: 7-11`,
    fabric_care: `70% Mercerised Cotton
        29% Polyester
        1% Elastane

        Machine washable at 30 degrees`,
  },

  {
    title: "Sky Wedding Paisley Tie",
    price: "34.95",
    product_code: "966945002",
    image_one: "/images/ties/sky_wedding_paisley_tie_01.webp",
    image_two: "/images/ties/sky_wedding_paisley_tie_02.webp",
    image_three: "/images/ties/sky_wedding_paisley_tie_03.jpg",
    image_four: "/images/ties/sky_wedding_paisley_tie_03.jpg",
    image_five: "/images/ties/sky_wedding_paisley_tie_03.jpg",
    description: `
        Round off a special-occasion look with the modern paisley structure of our tie.

        It's executed in a tonal effect using soft silk that helps it drape elegantly.`,
    fabric_care: `
        100% Silk

        Dry clean only`,
    features: `
        Paisley pattern

        Matching pocket square available`,
  },
  {
    title: "Champagne Grenadine Tie",
    product_code: 966904703,
    price: "29.95",
    description: `
            Champagne tones are a great way to make an occasion extra special.

    Moss' tie is made from silk woven with an open grenadine technique to give it a rich, pliable feel.`,
    image_one: "/images/ties/champagne-grenadine-tie_01.webp",
    image_two: "/images/ties/champagne-grenadine-tie_02.webp",
    image_three: "/images/ties/champagne-grenadine-tie_03.webp",
    image_four: "/images/ties/champagne-grenadine-tie_03.webp",
    image_five: "/images/ties/champagne-grenadine-tie_03.webp",
    features: `
        Textured finish

        Grenadine weave

        Matching pocket square available
      `,
    fabric_care: `
        100% Silk

        Dry clean only`,
  },

  {
    title: "Mayfair Black Patent Dress Shoes",
    product_code: "966495215",
    price: "69.95",
    image_one: "/images/shoes/mayfair_black_patent_01.webp",
    image_two: "/images/shoes/mayfair_black_patent_02.webp",
    image_three: "/images/shoes/mayfair_black_patent_03.webp",
    image_four: "/images/shoes/mayfair_black_patent_04.webp",
    image_five: "/images/shoes/mayfair_black_patent_04.webp",
    description: `
        For that ultra-polished look, these patent leather dress shoes from Moss London are a great go-to option. If you've got an excuse to dress up, take black tie style to another level with the help of these patent leather oxfords. With their highly polished uppers they're the perfect accompaniment to a suave black jacket and trouser combo. Whether you're heading to a wedding or a formal dinner, these dress shoes will work perfectly with one of Moss London's skinny fit tuxedos.
    `,
    fabric_care: `Lace-up

        Derby

        Patent`,
    features: `Polished hardware`,
  },
  {
    title: "Black Suede Loafers",
    price: "69.95",
    product_code: "966825715",
    image_one: "/images/shoes/black_suede_loafer_01.webp",
    image_two: "/images/shoes/black_suede_loafer_02.webp",
    image_three: "/images/shoes/black_suede_loafer_03.webp",
    image_four: "/images/shoes/black_suede_loafer_04.webp",
    image_five: "/images/shoes/black_suede_loafer_05.webp",
    features: `
        Built-up heel

        Penny trim`,
    description: `
        With their black goat-suede uppers and penny trim, Moss' loafers will cross from work to evening to weekend with ease.

        They're set on a built-up heel unit for improved support where you need it most
    `,
    fabric_care: `
        Goat Suede upper
        Rubber Sole`,
  },
  {
    title: "John White Monkton Brown Double Monk",
    price: "139.0",
    product_code: "966917907",
    image_one: `/images/shoes/john_white_monkton_brown_double_monk_shoe_01.webp`,
    image_two: `/images/shoes/john_white_monkton_brown_double_monk_shoe_02.webp`,
    image_three: `/images/shoes/john_white_monkton_brown_double_monk_shoe_03.webp`,
    image_four: `/images/shoes/john_white_monkton_brown_double_monk_shoe_04.webp`,
    image_five: `/images/shoes/john_white_monkton_brown_double_monk_shoe_04.webp`,
    features: `Polished hardware`,
    description: `
        Step away from your black dress shoes with John White's Monkton.

        Polished brown leather uppers will go with any outfit, from more paired-back business to totally off-duty weekend looks.`,
    fabric_care: `
        Leather Upper
        Leather Lining
        Rubber Sole`,
  },

  {
    title: "Gold Knot Cufflinks",
    price: "29.95",
    product_code: "966982922",
    image_one: "/images/cufflinks/gold_textured_round_cufflinks_01.jpg",
    image_two: "/images/cufflinks/gold_textured_round_cufflinks_02.webp",
    image_three: "/images/cufflinks/gold_textured_round_cufflinks_02.webp",
    image_four: "/images/cufflinks/gold_textured_round_cufflinks_02.webp",
    image_five: "/images/cufflinks/gold_textured_round_cufflinks_02.webp",
    description: `
        With a textured knot head, our cufflinks will make a refined addition to any formal look.

        We've made them in gold-tone brass to deliver a luxe touch to your cuff.`,
    features: `
        Polished finish

option

        Branded box`,
    fabric_care: `100% Brass`,
  },
  {
    title: "Jade Stone Round Cufflinks",
    price: "29.95",
    product_code: "966886326",
    image_one: "/images/cufflinks/jade_stone_round_cufflinks_01.webp",
    image_two: "/images/cufflinks/jade_stone_round_cufflinks_02.webp",
    image_three: "/images/cufflinks/jade_stone_round_cufflinks_02.webp",
    image_four: "/images/cufflinks/jade_stone_round_cufflinks_02.webp",
    image_five: "/images/cufflinks/jade_stone_round_cufflinks_02.webp",
    description: `
        Add a touch of colour to a formal look with Moss' elegant round cufflinks.

        They're crafted in highly polished brass and set with a jade stone that'll flash emerald tones as you move`,
    features: `
        Round design

        Polished finish`,
    fabric_care: `
        100% Brass
        Jade Stone`,
  },
  {
    title: "Black Mother of Pearl Square cufflinks",
    price: "29.95",
    product_code: "966982527",
    image_one:
      "/image/cufflinks/black_mother_of_pearl_square_cufflinks_01.webp",
    image_two:
      "/image/cufflinks/black_mother_of_pearl_square_cufflinks_02.webp",
    image_three: "/images/cufflinks/jade_stone_round_cufflinks_02.webp",
    image_four: "/images/cufflinks/jade_stone_round_cufflinks_02.webp",
    image_five: "/images/cufflinks/jade_stone_round_cufflinks_02.webp",
    description: `
        Set with a colourful mother-of-pearl core, our square cufflinks are a refined way to round out your look.

        The polished brass offsets the pearlescent centre nicely.`,
    features: `
        Polished finish

        Ideal gift

        Branded box`,
    fabric_care: `100% Brass`,
  },
  {
    title: "Fancy Gold Knot Cufflinks",
    price: "29.95",
    product_code: "966715622",
    image_one: "images/cufflinks/fancy_gold_knot_cufflinks_01.webp",
    image_two: "images/cufflinks/fancy_gold_knot_cufflinks_02.jpg",
    image_three: "images/cufflinks/fancy_gold_knot_cufflinks_02.jpg",
    image_four: "images/cufflinks/fancy_gold_knot_cufflinks_02.jpg",
    image_five: "images/cufflinks/fancy_gold_knot_cufflinks_02.jpg",
    description: `
        Slip MB's knotted links through your French cuffs for a rich touch that won't go unnoticed.

        They're crafted in gold-effect brass and delivered in a branded box, so they'd make an ideal gift for fans of the finer things in life.`,
    features: `
        Polished finish

        Ideal gift

        Branded box`,
    fabric_care: `100% Brass`,
  },
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    price TEXT NOT NULL,
    product_code TEXT NOT NULL,
    image_one TEXT NOT NULL,
    image_two TEXT NOT NULL,
    image_three TEXT NOT NULL,
    image_four TEXT NOT NULL,
    image_five TEXT NOT NULL,
    description TEXT NOT NULL,
    features TEXT NOT NULL,
    fabric_care TEXT NOT NULL
    )
    `
).run();

async function initData() {
  const stmt = db.prepare(`
        INSERT INTO products VALUES (
        null,
        @title,
        @price,
        @product_code,
        @image_one,
        @image_two,
        @image_three,
        @image_four,
        @image_five,
        @description,
        @features,
        @fabric_care
        )
        `);

  for (const product of mossAccessories) {
    stmt.run(product);
  }
}

initData();
