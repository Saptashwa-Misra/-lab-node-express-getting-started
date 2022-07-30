//Node Server
let http = require('http');

http.createServer((req,res)=>{
    res.write("Hello World! Using Node Server");
    res.end();
}).listen(8001, ()=>console.log("Node server started at port 8001"));

//Express Server
let Port_node = process.env.PORT || 8002;
let express = require('express');
let app = express();
app.get('/',(req,res)=>{
    res.json({Message:"Hello World! Using Express Server",
              Information: "/Home -> Home Page"
})
});
app.get('/Home', (req,res)=>{
    res.send("Home Express page")
});

app.listen(Port_node, ()=>console.log("Express server started at port "+Port_node));