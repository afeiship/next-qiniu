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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultOptions = {
  runtimes: 'html5',
  uptoken_url: '/', // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
  get_new_uptoken: false, // 设置上传文件的时候是否每次都重新获取新的uptoken
  domain: 'http://qiniu-plupload.qiniudn.com/',
  container: 'qiniu_container', // 上传区域DOM ID，默认是browser_button的父元素
  max_file_size: '100mb', // 最大文件体积限制
  max_retries: 3, // 上传失败最大重试次数
  dragdrop: false, // 开启可拖曳上传
  unique_names: true,
  chunk_size: '4mb', // 分块上传时，每块的体积
  auto_start: true, // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
  multi_selection: false,
  filters: {
    mime_types: [{
      title: "Image files",
      extensions: "jpeg,jpg,gif,png"
    }],
    max_img_resolution: [1280, 960],
    prevent_duplicates: false
  }
};

var _default = function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, null, [{
    key: 'init',
    value: function init(inOptions) {
      return _qiniuJs2.default.uploader((0, _objectAssign2.default)(defaultOptions, inOptions));
    }
  }]);

  return _default;
}();

exports.default = _default;