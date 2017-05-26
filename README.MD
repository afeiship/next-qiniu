# qiniu-jssdk
> A better qiniu sdk for webpack app.


## install:
```bash
npm install afeiship/qiniu-jssdk
```

## usage:
```html
<script type="text/javascript" src="http://jssdk.demo.qiniu.io/bower_components/plupload/js/moxie.js"></script>
<script type="text/javascript" src="http://jssdk.demo.qiniu.io/bower_components/plupload/js/plupload.dev.js"></script>
```

```javascript
import Qiniu,{Helper} from 'qiniu-jssdk';

//1. Helper.hotfix();

//2.User Qiniu Object in your bussiness.
Helper.uploader({
    uptoken:/*YOUR_TOKEN*/,
    browse_button: 'pickfile',
    container: 'qiniu_container',
    events:{
      FilesAdded: () => {
        //file add.
      },
      FileUploaded: (up, file, info) => {
        //on file uploaded.
      },
      UploadComplete: () => {
        //upload complete.
      },
      Error: (up, err, errTip) => {
        //on error.
      }
    }
})
```


## resource:
+ https://github.com/moxiecode/plupload
+ https://github.com/moxiecode/moxie
