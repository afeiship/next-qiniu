import {DEFAULTS} from './const';
import Qiniu from 'qiniu-js';
import objectAssign from 'object-assign';

export default class {
  
  static hotfix() {
    // window.plupload = plupload;
    // window.mOxie = mOxie;
    // window.mOxie.Env = mOxie.core.utils.Env;
    // window.mOxie.XMLHttpRequest = mOxie.xhr.XMLHttpRequest;
  }

  static uploader(inOptions) {
    const {events, ...options} = inOptions;
    return Qiniu.uploader(
      objectAssign({
        init: events
      }, DEFAULTS, options)
    );
  }

}
