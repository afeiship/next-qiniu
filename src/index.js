import Qiniu from 'qiniu-js';
import mOxie from './moxie';
import plupload from './plupload';



window.mOxie = mOxie;
window.plupload = plupload;

export default Qiniu;

export {
  mOxie,
  plupload
};
