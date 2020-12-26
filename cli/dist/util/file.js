"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFolder = createFolder;
exports.getFiles = getFiles;
exports.createFile = createFile;
exports.readFile = readFile;
exports.readJson = readJson;
exports.copy = copy;

var _fs = _interopRequireDefault(require("fs"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFolder(directory) {
  _fs.default.rmdirSync(directory, {
    recursive: true
  });

  _fs.default.mkdirSync(directory);
}

function getFiles(directory) {
  return _fs.default.readdirSync(directory);
}

function createFile(path, data) {
  _fs.default.writeFileSync(path, data, {
    encoding: "utf-8"
  });
}

function readFile(path) {
  return _fs.default.readFileSync(path, 'utf8').toString();
}

function readJson(path) {
  const rawConfig = readFile(path);
  return JSON.parse(rawConfig);
}

function copy(from, to) {
  _fsExtra.default.copySync(from, to);
}