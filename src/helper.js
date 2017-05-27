import {DEFAULTS} from './const';
import Qiniu from 'qiniu-js';
import mOxie from 'plupload/js/moxie';
import objectAssign from 'object-assign';
import plupload from 'plupload/js/plupload.dev';

export default class {
  
  static hotfix() {
    window.plupload = plupload;
    window.mOxie = mOxie;
    window.mOxie.Env = mOxie.core.utils.Env;
    window.mOxie.XMLHttpRequest = mOxie.xhr.XMLHttpRequest;
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
