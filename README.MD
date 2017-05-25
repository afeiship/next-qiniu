# qiniu-jssdk
> A better qiniu sdk for webpack app.


## install:
```bash
npm install afeiship/qiniu-jssdk
```

## usage:
```javascript
import Qiniu,{Helper} from 'qiniu-jssdk';

//1. Helper.hotfix();

//2.User Qiniu Object in your bussiness.
Helper.uploader({
    uptoken:/*YOUR_TOKEN*/,
    browse_button: 'pickfile',
    container: 'qiniu_container',
    events:{
      FilesAdded:()=>{
        //your logics
      }
    }
}).then(({info})=>{

},({errTip})=>{

});
```


## resource:
+ https://github.com/moxiecode/plupload
+ https://github.com/moxiecode/moxie
