import {DEFAULTS} from './const';
import Q from 'q';
import Qiniu from 'qiniu-js';
import mOxie from 'plupload/js/moxie';
import objectAssign from 'object-assign';
import plupload from 'plupload';

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
      objectAssign({
        init: {
          FileUploaded: function (up, file, info) {
            deferred.resolve({up, file, info});
          },
          Error: function (up, err, errTip) {
            deferred.reject({up, err, errTip});
          }
        }
      }, DEFAULTS, inOptions)
    );
    return deferred.promise;
  }

}
