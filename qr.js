// const QRCode = require('qrcode');
// const url = "http://www.nepal.com";

// QRCode.toString('I am a carrot!',{type:'terminal'}, function (err, url) {
// //   console.log(url)
// })

//

const http = require("http");
const QRCode = require('qrcode');

// QRCode.toDataURL('I am Tony!', function (err, url) {
//   console.log(url)
// })

http.createServer(async (req, res)=> {
    res.writeHead (200, { "content-type": "text/html"});
    const qrData = await QRCode.toDataURL ("I am not Tony!");
    res.write(`<img src=${qrData} />`);
    res.end();
})
.listen(3333);
console.log("App is running.");
//



// const PDFDocument = require('pdfkit');
// const fs = require('fs');

// const doc = new PDFDocument();

// doc.pipe(fs.createWriteStream('output.pdf'));

// doc
//   .fontSize(25)
//   .text('Some text with an embedded font!', 100, 100);
// doc
//   .addPage()
//   .fontSize(25)
//   .text('Here is some vector graphics...', 100, 100);
// doc
//   .save()
//   .moveTo(100, 150)
//   .lineTo(100, 250)
//   .lineTo(200, 250)
//   .fill('#FF3300');
// doc
//   .addPage()
//   .fillColor('blue')
//   .text('Here is a link!', 100, 100)
//   .underline(100, 100, 160, 27, { color: '#0000FF' })
//   .link(100, 100, 160, 27, 'http://google.com/');
// doc.end();

//

//Weather API using package axios and open source weather url LINK

// const axios = require("axios");
// const moment = require("moment");

// async function getWeather(){
//     try{
//         const response = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto");
//     }
// }
