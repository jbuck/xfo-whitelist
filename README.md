# xfo-whitelist

Connect/Express middleware to apply X-Frame-Options based on a whitelist

## Quick start

Install using npm: `npm install --save xfo-whitelist`

Include the module inside your application:

```javascript
var express = require("express"),
    xfo = require("xfo-whitelist"),

var app = express();

// Add X-Frame-Options: DENY to all requests but "/embed.html"
app.use(xfo(["/embed.html"]));
app.use(express.static(__dirname + "/public"));

```
