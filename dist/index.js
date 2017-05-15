'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = undefined;

var _qiniuJs = require('qiniu-js');

var _qiniuJs2 = _interopRequireDefault(_qiniuJs);

var _plupload = require('plupload');

var _plupload2 = _interopRequireDefault(_plupload);

var _moxie = require('plupload/js/moxie');

var _moxie2 = _interopRequireDefault(_moxie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _qiniuJs2.default;
var bootstrap = exports.bootstrap = function bootstrap() {
  window.plupload = _plupload2.default;
  window.mOxie = _moxie2.default;
  window.mOxie.Env = _moxie2.default.core.utils.Env;
  window.mOxie.XMLHttpRequest = _moxie2.default.xhr.XMLHttpRequest;
};