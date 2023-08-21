const http = require('http'); //nodejs inbuilt package

http.createServer((req, res)=>{
    res.writeHead(200, { "content-type": "text/html"}); //html tag
    res.write("<h1>Hello Avi's World.</h1>"); //body
    res.end();
}).listen(5555);

console.log("App is running on port 5555");
//localhost:5555 in browser to check