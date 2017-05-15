import Qiniu from 'qiniu-js';
import plupload from 'plupload';
import mOxie from 'plupload/js/moxie';


export default Qiniu;

export const bootstrap = function () {
  window.plupload = plupload;
  window.mOxie = mOxie;
  window.mOxie.Env = mOxie.core.utils.Env;
  window.mOxie.XMLHttpRequest = mOxie.xhr.XMLHttpRequest;
};
