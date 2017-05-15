import Qiniu from 'qiniu-js';
import plupload from './plupload';
import mOxie from 'mOxie';


window.mOxie = mOxie;
window.plupload = plupload;


export default Qiniu;

export {
  mOxie,
  plupload
};
