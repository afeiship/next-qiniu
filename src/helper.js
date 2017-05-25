import {DEFAULTS} from './const';
import Q from 'q';
import Qiniu from 'qiniu-js';
import mOxie from 'plupload/js/moxie';
import objectAssign from 'object-assign';
import plupload from 'plupload';

export default class {
  static uploaderDeferred = null;
  static hotfix() {
    window.plupload = plupload;
    window.mOxie = mOxie;
    window.mOxie.Env = mOxie.core.utils.Env;
    window.mOxie.XMLHttpRequest = mOxie.xhr.XMLHttpRequest;
  }

  static uploader(inOptions) {
    const {events,...options} = inOptions;
    Qiniu.uploader(
      objectAssign({
        init: objectAssign({
          FileUploaded: function (up, file, info) {
            this.uploaderDeferred = Q.defer();
            this.uploaderDeferred.resolve({up, file, info});
          },
          Error: function (up, err, errTip) {
            this.uploaderDeferred.reject({up, err, errTip});
          }
        },events)
      }, DEFAULTS, options)
    );
    return deferred.promise;
  }

}
