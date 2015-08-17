## How-to export my moduels
* Clone this project `git clone https://github.com/zhoukekestar/modules`
* Edit `Gruntfile.js` to select the module which you want to export.
```js
modulesConfig = {
  alert         : false, // you don't want to export
  alertMsg      : true   // you want to export
}
```
* Cmd & run `npm install `
* Cmd & run `grunt `
* You can get your modules in `dist` directory.

## src keywords
* alert confirm prompt, ��ǿ������ԭ����ʾ
* alert message, ��ʾ��Ϣ
* city select, ����ѡ��, �༶����
* checkbox, like, radio, ѡ���, ��, iOS����
* load page, single page, web application, ����ҳ��, ��ҳ��Ӧ��
* simple paging, �򵥷�ҳ
* pull to refresh, pull to load, load more, ����ˢ��, ��������
* rich text editor, ueditor for nodejs, ���ı��༭��, �ٶ�ueditor
* simple upload, �򵥵��ϴ�������jquery-fileupload��, ���ϴ�����

## src
* ģ��Դ�룬���붼��ģ�黯�ģ�
* һ��һ�������У���Ƚ����ɣ�����Ҫһ��ȫ������
* ��������ô�ú��п�д��˵����д��demo������һ�£�
* ����bug���ύһ�£�����һ�£�

## ����
* ���鿴һ��[��ƪ����](http://isux.tencent.com/half-package-web-components-for-design.html)���ǳ���

## �뷨
1���Կ�ܵĿ�����

  ǰ�˵�js��ܶ��ֶ����������е�Ī����angularjs��react�ˣ�����kissy��YUI���е�������·�أ����������Ҿ��ã����ֿ�ܶ��Ƕ�ԭ��html��׼���ƻ�������react���Լ���jsx�﷨����Ȼ��html���ƣ����ͱ�׼��ȥ��Զ��������angularjs���Լ��ĺö����ԣ�����ng-app,ng-model֮��ġ�

  ���ò����ϣ�ѧϰ�κο�ܶ����гɱ��ģ���ǰ�ο�ܱ仯��̫����Ƶ������ѧϰ�ɱ����ǳ��ء�

  ��һֱ����̫ϲ����ܣ���������jsģ���������е㹤����ĸо���Ҫ�õ�ʲô���ͼ���ʲô���������ֵ���ϣ��������ڿ�ܱ����ģ���������������ֻ���react��kissy��ģ�������������ܹ�ֱ���������������������ܵ��������Ȼ�����ܻ�����requirejs��ģ����ع��ߣ�

2����js��׼�Ŀ������ɲο�[ieBetter.js](https://github.com/zhoukekestar/ieBetter.js)��Ŀǰ����ԥҪ��Ҫ֧��IE������ֱ����������˵�ɡ�������

  ��ϣ���ұ�дjs�����ʱ�����ܡ������ı��롱���������Ǹ��ּ��ݡ����磬�һ�дһ��`event.js`��

  ��`navigator.appVersion.indexOf("MSIE 8") !== -1`��ʱ���ִ��

  ```js
    Element.prototype.addEventListener = function (name, callback) {
     this.attachEvent('on' + name, callback);
  }
  ```

  ȥ����IE8��Ȼ�������ط����Ҿ͡��������ر����ˣ�ֱ��д`addEvnetListener`���У����ÿ��Ǽ��ݡ���������������һ����дһ��addEvent������Ȼ������ģ�鶼����addEvent���������ñ�׼��`addEventListener`���������ܸо�addEvent�����Ƕ���ģ��о��е㡰��Ⱦ��������

  �ٱ��磬���ajax�������һ�дһ��

   ```js
  if (!window.XMLHttpRequest) {
    window.XMLHttpRequest = function() {
       return new ActiveXObject('Microsoft.XMLHTTP');
    }
  }
  ```

  �������˻�ȥдһ��ajax������Ȼ������ģ�鶼����ajax����ȥʹ��ajax������W3C�ı�׼����`new XMLHttpRequest()`.

  ��ϣ����������д����������������������һЩ�ű����Ѳ�����ĥƽ�����ˡ�

  �Ҳ�֪�������ı��뷽ʽ�ò��ã����������ʵġ���Ϊ�ҿ��������еĿ�ܣ�������ţ�ı��벻�������ġ��������һ������ķ�����Ȼ��ѱ�׼��һ�ߣ���������ѱ�׼ͨ�����ݽű����ѡ���׼����Ϊ����׼����

3����css��׼�Ŀ�����

  ��ϣ���ұ�дcss��ʱ����Ҳ���������룬���������ּ��ݣ����js��˼����һ����

  �����һ�д`formValidator.js`��ȥ֧�ָ���������������֧�ֵ����ԣ�Ȼ���ҾͿ�������д��

  `<input name="abc" placeholder="6���ַ�" value="123456" pattern="^[0-9]{6}$">`

  `<input name="abc" value="123456" required minlength="6" maxlength="10">`

  ��Щ���������������ǿһЩ���ԣ���ͱ�׼��Щ���룬��Ҳ����֮�٣���Щʱ��W3C�ı�׼����������ı仯�����Ծ͡���������

  `<input type="email" name="emial" placeholder="email" data-msg='{"email":"emial��ʽ������"}'>`


4���Ա�׼��ǿ�Ŀ���������[#zhangxinxu#](https://github.com/zhangxinxu)�Ľ��飬������api����Ҳ����ǿ���������г�ͻ���д�˼������

  ��ԭ�б�׼����ǿ�������ƻ�ԭ��ϵͳ��api��һ���������Ҫ�ӹ��ܣ���Ӧ�����һ�����������Ҳ���ô�룬�κο⡢��������ѧϰ����Խ����Խ���ױ�������

  ���ԣ�������չԭ��ϵͳ��api����Ȼ�����ڲ�֪�������£����ܶ����ǵĴ�����ɲ���Ҫ�����ţ�����Ҫ����ԭ��ϵͳ��api

  ���磺����ϵͳ��alert���������һ������������ǿЧ��չʾ

  ```js
   var _alert = window.alert;
    window.alert = function(msg, option) {/* Code here*/}
  ```

  1���򵥵��ã�û�ж���Ĵ������Ҫִ�е�����¡�����`alert('your message', false)`����ֱ�ӵ��ü��ɣ������false������ʾ��ʹ��ϵͳԭ���ĵ�����

  2��alert���д������Ҫִ�У�ʹ��`alert('your message', callback-function)`����callback-function�м�����Ҫִ�еĴ��루ͬ��ʵ�ֲ��ˣ�ֻ��callback�ˣ�

  Ч������������ģ�

  https://github.com/zhoukekestar/modules/blob/master/src/alert/demo.gif

