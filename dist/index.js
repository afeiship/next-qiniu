'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plupload = exports.mOxie = undefined;

var _qiniuJs = require('qiniu-js');

var _qiniuJs2 = _interopRequireDefault(_qiniuJs);

var _moxie = require('./moxie');

var _moxie2 = _interopRequireDefault(_moxie);

var _plupload = require('./plupload');

var _plupload2 = _interopRequireDefault(_plupload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.mOxie = _moxie2.default;
window.plupload = _plupload2.default;

exports.default = _qiniuJs2.default;
exports.mOxie = _moxie2.default;
exports.plupload = _plupload2.default;