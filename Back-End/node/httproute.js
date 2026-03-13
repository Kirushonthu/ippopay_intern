const http = require("http")
const Server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*")
    
    if (req.url === "/" || req.url === "/home") {
        res.writeHead(200, { "Content-type": "text/plain" })
        res.write("home page")
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-type": "text/plain" })
        res.write("This is about page!")
    }

    else {
        res.writeHead(404, { "Content-type": "text/plain" })
        res.write("404 Page not found")
    }

    res.end()
})

Server.listen(3000, () => {
    console.log("Server is runing at port //localhost:3000/");
})