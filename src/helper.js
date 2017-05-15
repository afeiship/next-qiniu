import Qiniu from 'qiniu-js';
import objectAssign from 'object-assign';
import plupload from 'plupload';
import mOxie from 'plupload/js/moxie';
import Q from 'q';

const defaultOptions = {
  runtimes: 'html5',
  uptoken_url: '/',         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
  get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的uptoken
  domain: 'http://qiniu-plupload.qiniudn.com/',
  container: 'qiniu_container',             // 上传区域DOM ID，默认是browser_button的父元素
  max_file_size: '100mb',             // 最大文件体积限制
  max_retries: 3,                     // 上传失败最大重试次数
  dragdrop: false,                     // 开启可拖曳上传
  unique_names: true,
  chunk_size: '4mb',                  // 分块上传时，每块的体积
  auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
  multi_selection: false,
  filters: {
    mime_types: [
      {
        title: "Image files",
        extensions: "jpeg,jpg,gif,png"
      }
    ],
    max_img_resolution: [1280, 960],
    prevent_duplicates: false
  }
};


export default class {

  static hotfix() {
    window.plupload = plupload;
    window.mOxie = mOxie;
    window.mOxie.Env = mOxie.core.utils.Env;
    window.mOxie.XMLHttpRequest = mOxie.xhr.XMLHttpRequest;
  }

  static uploader(inOptions) {
    const deferred = Q.defer();
    Qiniu.uploader(
      objectAssign(defaultOptions, {
        init: {
          FileUploaded: function (up, file, info) {
            deferred.resove(up, file, info);
          },
          Error: function (up, err, errTip) {
            deferred.reject(up, err, errTip);
          }
        }
      }, inOptions)
    );
    return deferred.promise;
  }
}
