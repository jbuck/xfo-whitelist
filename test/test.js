var assert = require("assert");

var mock = require("./mock");
var index_request = mock.request("/index.html");
var embed_request = mock.request("/embed.html");
var response;

var xfo = require("../index");

// Pass no array
response = mock.response();
xfo()(index_request, response, function() {
  assert.strictEqual(response.get("X-Frame-Options"), "DENY", "X-Frame-Options: DENY should be set");
});

// Pass an array
response = mock.response();
xfo(["/embed.html"])(index_request, response, function() {
  assert.strictEqual(response.get("X-Frame-Options"), "DENY", "X-Frame-Options: DENY should be set");
});

response = mock.response();
xfo(["/embed.html"])(embed_request, response, function() {
  assert.strictEqual(response.get("X-Frame-Options"), undefined, "X-Frame-Options: DENY should not be set");
});

process.exit(0);
