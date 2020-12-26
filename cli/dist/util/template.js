"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;

var _handlebars = _interopRequireDefault(require("handlebars"));

var _pluralize = _interopRequireDefault(require("pluralize"));

var _file = require("./file");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_handlebars.default.registerHelper('plural', function (input) {
  return (0, _pluralize.default)(input);
});

_handlebars.default.registerHelper('pluralLower', function (input) {
  return (0, _pluralize.default)(input).toLocaleLowerCase();
});

_handlebars.default.registerHelper('lower', function (input) {
  return input.toLocaleLowerCase();
});

function render(path, data) {
  const source = (0, _file.readFile)(path);

  const template = _handlebars.default.compile(source);

  const output = template(data);
  return output;
}