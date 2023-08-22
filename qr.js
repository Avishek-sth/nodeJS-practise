const QRCode = require('qrcode');
const url = "http://www.nepal.com";

QRCode.toString('I am a carrot!',{type:'terminal'}, function (err, url) {
  console.log(url)
})