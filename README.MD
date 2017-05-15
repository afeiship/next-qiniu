# qiniu-jssdk
> A better qiniu sdk for webpack app.


## install:
```bash
npm install afeiship/moxie-plupload
```

## usage:
```javascript
import Qiniu,{bootstrap,QiniuHelper} from 'qiniu-jssdk';

//1. bootstrap();

//2.User Qiniu Object in your bussiness.
this._uploader = QiniuHelper.init({
    uptoken:/*YOUR_TOKEN*/,
    browse_button: 'pickfile', 
    container: 'qiniu_container', 
    init: {
        FilesAdded: function (up, file) {
        },
        FileUploaded: function (up, file, info) {
        },
        Error: function (up, err, errTip) {
        }
    }
});
```


## resource:
+ https://github.com/moxiecode/plupload
+ https://github.com/moxiecode/moxie
