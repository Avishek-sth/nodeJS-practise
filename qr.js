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

const CC = require('currency-converter-lt')
let currencyConverter = new CC()

currencyConverter.from("USD").to("GBP").amount(125).convert().then((response) => {
    console.log(response) //or do something else
})