let http = require("http");
let fs = require("fs");

const server = http.createServer((req, res) => {

 //GET PROCUREMENT
  if (req.method === "GET" && req.url === "/kgl/procurement") {

    fs.readFile("data.json", (err, data) => {
      let records = [];

      if (!err) {
        records = JSON.parse(data);
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(records));
    });
  }

  //POST PROCUREMENT 
  else if (req.method === "POST" && req.url === "/kgl/procurement") {

    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        fs.readFile("data.json", (err, data) => {
          let records = [];

          if (!err) {
            records = JSON.parse(data);
          }

          records.push(body);

          fs.writeFile(
            "data.json",
            JSON.stringify(records),
            (err) => {
              if (err) {
                res.writeHead(500, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Failed to save data" }));
                return;
              }

              res.writeHead(201, { "Content-Type": "application/json" });
              res.end(JSON.stringify({
                message: "Procurement record added successfully"
              }));
            }
          );
        });

      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON data" }));
      }
    });
  }

  // not found 
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
