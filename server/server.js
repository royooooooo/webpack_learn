const express = require('express');
const ReactSSR = require("react-dom/server");
const serverEntry = require("../dist/server.entry.js").default;
const path = require("path");
const fs = require("fs");

const template = fs.readFileSync(path.join(__dirname, "../dist/index.html"), "utf8");
const app = express();

app.get("*", (req, res) => {
    console.log(template);
    const appString = ReactSSR.renderToString(serverEntry);
    res.send(template.replace('<app/>', appString));
});

app.listen(3333, () => {
    console.log('server is listening on 3333')
});





