var data = require("fs").readFileSync("data.CSV", "utf8")
data = data.split("\r\n")
for (let i in data) { data[i] = data[i].split(",") }
console.log(data);