var Request = function(url) {
  this.url = url;
};

module.exports.request = function(url) {
  return new Request(url);
};

var Response = function() {
  this._headers = {};
};

Response.prototype.get = function(header) {
  return this._headers[header];
};

Response.prototype.set = function(header, value) {
  this._headers[header] = value;
};

module.exports.response = function() {
  return new Response();
};
