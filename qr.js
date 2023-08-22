// const QRCode = require('qrcode');
// const url = "http://www.nepal.com";

// QRCode.toString('I am a carrot!',{type:'terminal'}, function (err, url) {
// //   console.log(url)
// })

//

// const QRCode = require('qrcode');

// QRCode.toDataURL('I am Tony!', function (err, url) {
//   console.log(url)
// })

//

// const CC = require('currency-converter-lt')
// let currencyConverter = new CC()

// currencyConverter.from("USD").to("GBP").amount(125).convert().then((response) => {
//     console.log(response) //or do something else
// })

//

const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('output.pdf'));

doc
  .fontSize(25)
  .text('Some text with an embedded font!', 100, 100);
doc
  .addPage()
  .fontSize(25)
  .text('Here is some vector graphics...', 100, 100);
doc
  .save()
  .moveTo(100, 150)
  .lineTo(100, 250)
  .lineTo(200, 250)
  .fill('#FF3300');
doc
  .addPage()
  .fillColor('blue')
  .text('Here is a link!', 100, 100)
  .underline(100, 100, 160, 27, { color: '#0000FF' })
  .link(100, 100, 160, 27, 'http://google.com/');
doc.end();
