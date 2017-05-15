'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _qiniuJs = require('qiniu-js');

var _qiniuJs2 = _interopRequireDefault(_qiniuJs);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _plupload = require('plupload');

var _plupload2 = _interopRequireDefault(_plupload);

var _moxie = require('plupload/js/moxie');

var _moxie2 = _interopRequireDefault(_moxie);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

var _const = require('./const');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, null, [{
    key: 'hotfix',
    value: function hotfix() {
      window.plupload = _plupload2.default;
      window.mOxie = _moxie2.default;
      window.mOxie.Env = _moxie2.default.core.utils.Env;
      window.mOxie.XMLHttpRequest = _moxie2.default.xhr.XMLHttpRequest;
    }
  }, {
    key: 'uploader',
    value: function uploader(inOptions) {
      var deferred = _q2.default.defer();
      _qiniuJs2.default.uploader((0, _objectAssign2.default)({
        init: {
          FileUploaded: function FileUploaded(up, file, info) {
            deferred.resove(up, file, info);
          },
          Error: function Error(up, err, errTip) {
            deferred.reject(up, err, errTip);
          }
        }
      }, _const.DEFAULTS, inOptions));
      return deferred.promise;
    }
  }]);

  return _default;
}();

exports.default = _default;