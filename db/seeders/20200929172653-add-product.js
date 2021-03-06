'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Gabrielle Robe Dress, Teal', designerId: 1, categoryId: 5,
        description: `Wrap front with velvet waist tie closure. Paillette sequin embellished fabric. Self & Lining: 100% viscose. Dry clean only. Made in India.`,
        image: 'retrofeteg.png', price: 635, size: 'xs | s | m | l', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Club 1 Visor', designerId: 5, categoryId: 1,
        description: `100% acrylic. Made in Italy. Brim measures approx 3.25" in length. Adjustable logo webbing elasticized band`,
        image: 'DiorVisor.png', price: 390, size: 'One Size', review: 'must have for Summer', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Leather Mini Dress', designerId: 11, categoryId: 5,
        description: `Self: 100% lambskin leather.
        Lining: 96% cupro 4% elastan.
        Made in Italy.
        Dry clean only.
        Fully lined.
        Back zip closure.`,
        image: 'versacelmd.png', price: 3325, size: 'xs | s | m | l', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Long Sleeve Bodysuit', designerId: 11, categoryId: 12,
        description: `80% polyamide, 20% elastan.
        Made in Italy.
        Dry clean only.
        Hook and eye closures at bottom.
        Stretch fit.`,
        image: 'versacelsb1.png', price: 695, size: '36 | 38 | 40 | 42', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Tailored Short', designerId: 11, categoryId: 10,
        description: `Self: 100% silk.
        Lining: 59% viscose 41% cupro.
        Made in Italy.
        Dry clean only.
        Zip fly with logo-engraved button fastening.
        Pleated fabric at waist.`,
        image: 'versacets.png', price: 775, size: '36 | 38 | 40 | 42', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Crepe Belted Jumpsuit', designerId: 12, categoryId: 7,
        description: `Self: 93% poly, 7% elastan.
        Lining: 92% poly 8% elastan.
        Made in China.
        Dry clean only.
        Hidden back zip closure.
        Crepe fabric.`,
        image: 'zimmermanncbj.png', price: 530, size: '0/xs | 1/s', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Leopard Jacket', designerId: 9, categoryId: 6,
        description: `73% wool, 18% mohair, 11% polyamide, 1% elastan.
        Made in Italy.
        Dry clean only.
        Side slip pockets.
        Heavyweight knit fabric.`,
        image: 'saintlaurentlj.png', price: 2550, size: 'xs | m', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Leather Pant', designerId: 9, categoryId: 8,
        description: `Self: 100% lambskin leather.
        Lining: 59% cupro 41% silk.
        Pocket Lining: 100% cotton.
        Made in Italy.
        Professional leather cleaning only.
        Side slit pockets.`,
        image: 'saintlaurentlp.png', price: 2011, size: '42', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Runaway Shopping Logo Tote', designerId: 4, categoryId: 3,
        description: `Unlined monogram PVC with gold-tone hardware.
        Made in Italy.
        Measures approx 14"W x 13"H x 5"D.
        Resin handles measure approx 5.5" in diameter with a 3" drop.
        Open top.`,
        image: 'fendirslt.png', price: 2493, size: 'One Size', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Faux Leather Shorts', designerId: 10, categoryId: 10,
        description: `Self, Belt & Lining: 100% poly.
        Coating: 100% polyurethane.
        Made in China.
        Dry clean only.
        Button front closures.
        Pleated fabric detail at waist.
        Faux leather fabric.`,
        image: 'selfportraitfls.png', price: 320, size: '0 | 2 | 4 | 6 | 8', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Mix Skinny Pant', designerId: 14, categoryId: 8,
        description: `Self: 44% cotton, 31% polyamide, 21% poly, 4% elastan.
        Lining: 57% viscose 43% poly.
        Made in Italy.
        Dry clean only.
        Lurex fabric.
        Hidden back zip closure.`,
        image: 'muglermsp.png', price: 1090, size: '34', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Hadley Dress', designerId: 16, categoryId: 5,
        description: `50% poly, 50% nylon.
        Made in China.
        Dry clean only.
        Unlined.
        Burnout velvet fabric.
        Hidden back zip closure.
        Semi sheer.`,
        image: 'alexperryhd.png', price: 1600, size: '0 | 2', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Long Sleeve Slit Dress', designerId: 9, categoryId: 5,
        description: `Self & Lining: 100% silk.
        Made in France.
        Dry clean only.
        Partially lined.
        Wrap around front with side tie closure.
        Sleeve tie detail.`,
        image: 'sllssd.png', price: 3290, size: '34 | 36 | 38 | 40', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Barocco Bath Robe', designerId: 11, categoryId: 1,
        description: `Self, Trim 1 & 2: 100% cotton.
        Made in Italy.
        Machine wash.
        Open front.
        Front patch pockets.
        Logo devore fabric.
        Detachable belt with Barocco print details on the sleeves.`,
        image: 'vbbr.png', price: 595, size: 's | m | l | xl', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Jet Infinity Jumpsuit', designerId: 18, categoryId: 2,
        description: `85% polyamide, 15% lycra.
        Made in USA.
        Machine wash.
        Lattice elastic strap back detail.
        Shiny coated finish.
        Stretch fit.`,
        image: 'kjij.png', price: 145, size: 'xs | s | m | l | xl', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Luca Infinity Long Sleeve Crop Top', designerId: 18, categoryId: 2,
        description: `85% polyamide, 15% lycra.
        Made in USA.
        Machine wash.
        Shiny coated finish.
        Logo label detail at hem.
        Stretch fit.`,
        image: 'klilsct.png', price: 88, size: 'xs | s | m | l | xl', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Lustrous High Rise Legging', designerId: 18, categoryId: 2,
        description: `85% polyamide, 15% lycra.
        Made in USA.
        Machine wash.
        Elastic waistband.
        Interior waistband slit pocket.
        Shiny coated finish.
        Stretch fit.`,
        image: 'klhrl.png', price: 88, size: 'xxs | xs | s | m | l', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Low Back Fara Slip Catsuit', designerId: 19, categoryId: 7,
        description: `80% nylon, 20% spandex.
        Made in China.
        Machine wash.
        Stretch fit.`,
        image: 'nklbfsc.png', price: 175, size: 'xs | s | m | l | xl', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Short High Waist Buttoned Knit Skirt', designerId: 2, categoryId: 11,
        description: `88% viscose, 12% polyamide.
        Made in France.
        Dry clean only.
        Unlined.
        Heavyweight bandage knit fabric.
        Signature embossed button on front.
        Faux welt front detail.
        Exposed back zip closure.`,
        image: 'bshwbks.png', price: 945, size: '34 | 36 | 38 | 40', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Long Sleeve Turtleneck Fishtail Dress', designerId: 19, categoryId: 5,
        description: `95% poly, 5% spandex.
        Made in China.
        Hand wash.
        Unlined.
        Hidden back zip closure.
        Jersey fabric.
        Raw cut hem.`,
        image: 'nklstfd.png', price: 245, size: 'xs | s | m | l', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'XS Hourglass Top Handle Bag', designerId: 20, categoryId: 3,
        description: `Shiny croc embossed metallic leather with leather lining and antique gold-tone hardware.
        Made in Italy.
        Measures approx 7.5"W x 4.75"H x 3"D.
        Top handle measures approx 9" in length with a 3" drop.`,
        image: 'bxshthb.png', price: 1890, size: 'One Size', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Valentino Garavani Small VSling Shoulder Bag', designerId: 3, categoryId: 3,
        description: `Genuine leather with leather lining and antique gold-tone hardware.
        Made in Italy.
        Measures approx 7"W x 5.5"H x 3"D.
        Convertible shoulder strap measures approx 40" in length.`,
        image: 'vvgsvssb.png', price: 2575, size: 'One Size', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Small Hourlgass Top Handle Bag', designerId: 20, categoryId: 3,
        description: `Croc embossed calf leather with leather lining and antique gold-tone hardware.
        Made in Italy.
        Measures approx 9"W x 5.5"H x 4"D.
        Top handles measures approx 10.5" in length with a 4" drop.`,
        image: 'bshthb.png', price: 2150, size: 'One Size', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Medium Chain Shoulder Pouch', designerId: 21, categoryId: 3,
        description: `Nappa leather exterior and lining with polished gold-tone hardware.
        Made in Italy.
        Measures approx 12"W x 4.5"H x 6.5"D.
        Hinged frame top closure with magnetic fastening.
        Square cable chain shoulder strap.`,
        image: 'bvmcsp.png', price: 3600, size: 'One Size', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Medium Sunset Chain Bag', designerId: 9, categoryId: 3,
        description: `Suede & leather with lining and antique gold-tone hardware.
        Made in Italy.
        Measures approx 8.5"W x 6"H x 3"D.
        Convertible strap is approx 44" in l with a 21" drop.
        Fold-over flap top closure with magnetic button fastening.`,
        image: 'slmscb.png', price: 2390, size: 'One Size', review: '', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Lema Dress', designerId: 1, categoryId: 4,
        description: `98% cotton, 2% elastan.
        Made in Italy.
        Machine wash.
        Unlined.
        Button front closures.
        Breast flap pockets with button closures.`,
        image: 'rld.png', price: 450, size: 'xs | s | m | l', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Willa Dress', designerId: 1, categoryId: 4,
        description: `98% cotton, 2% elastan.
        Made in Italy.
        Machine wash.
        Unlined.
        Snap button front closures.
        Padded shoulders.`,
        image: 'rwd.png', price: 450, size: 'xs | s | m | l', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Glendale Skinny', designerId: 22, categoryId: 4,
        description: `95% cotton, 4% poly, 1% spandex.
        Made in Japan.
        Machine wash.
        Zip fly with button fastening.
        5-pocket design.
        Whiskering along front.
        Heavily faded and distressed throughout.`,
        image: 'mvgs.png', price: 350, size: '24 | 25 | 26 | 27 | 28', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Creston Tapered Skinny', designerId: 22, categoryId: 4,
        description: `100% cotton.
        Made in Japan.
        Machine wash.
        Button fly.
        Whiskering and fading detail along front.
        Distressed fabric detail throughout.`,
        image: 'mscts.png', price: 350, size: '24 | 25 | 26 | 27 | 28', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Carlton Blazer', designerId: 16, categoryId: 6,
        description: `Self: 75% cotton, 25% silk.
        Lining: 93% poly 7% elastan.
        Made in China.
        Dry clean only.
        Button front closures.
        Breast welt pocket.
        Front flap pockets.
        Back vent detail.
        Padded shoulders.`,
        image: 'apcb.png', price: 2600, size: 'US 2 / UK 6', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Alex Blazer', designerId: 16, categoryId: 6,
        description: `Self: 63% poly, 37% acetate.
        Lining: 82% tri-acetate 18% poly.
        Made in China.
        Dry clean only.
        Button front closures.
        Breast welt pocket.
        Front flap pockets.
        Padded shoulders.`,
        image: 'apab.png', price: 2200, size: 'US 0 / UK 4 | US 2 / UK 6', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Button Jacket', designerId: 9, categoryId: 6,
        description: `Self: 90% wool, 10% cashmere.
        Lining: 60% cupro 40% cotton.
        Made in Italy.
        Dry clean only.
        Front button closures.
        Chest patch pockets with button closure.
        Interior breast pocket.`,
        image: 'slbj.png', price: 2690, size: '34 | 36 | 38', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
      },
      {
        name: 'Suit Jacket', designerId: 9, categoryId: 6,
        description: `Self: 52% wool, 37% viscose, 11% metallized fibers.
        Lining: 100% silk.
        Pocket Lining: 100% cotton.
        Made in Italy.
        Dry clean only.
        Button front closures.
        Chest welt pocket.
        Front flap pockets.`,
        image: 'slsj.png', price: 2990, size: '46 | 48 | 50', review: 'cute!', createdAt: new Date(), updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
