const http = require('http'); //nodejs inbuilt package
const myModule = require("./myCustMod");
const upperCase = require("upper-case");

http.createServer((req, res)=>{
    res.writeHead(200, { "content-type": "text/html"}); //html tag
    const date = myModule.myDate();
    const myTime = myModule.myTime();
    const myName = upperCase.upperCase("Avishek");
    //res.write(`<h1>Hello Avi's World.</h1><p>${date}</p><p>${myTime}</p>`); //body
    res.write("<h1>Hello World!" + myName + "</h1><p>"+ date +"</p><p>"+ myTime + "</p>");
    res.end();
}).listen(5555);

console.log("App is running on port 5555");
//localhost:5555 in browser to check