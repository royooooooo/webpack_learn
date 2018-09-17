const express = require('express');
const ReactSSR = require("react-dom/server");
const serverEntry = require("../dist/server.entry.js");

const app = express();

app.get("*", (req, res) => {
    const appString = ReactSSR.renderToString(serverEntry);
    res.send(appString);
});





