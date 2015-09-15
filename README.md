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
* alert confirm prompt, 增强游览器原生显示
* alert message, 显示消息
* city select, 城市选择, 多级联动
* checkbox, like, radio, 选择框, 赞, iOS开关
* load page, single page, web application, 加载页面, 单页面应用
* simple paging, 简单分页
* pull to refresh, pull to load, load more, 下拉刷新, 下拉加载
* rich text editor, ueditor for nodejs, 富文本编辑器, 百度ueditor
* simple upload, 简单的上传（基于jquery-fileupload）, 简化上传代码

## src
* 模块源码，代码都是模块化的，
* 一个一个看就行，会比较轻松，不需要一下全看懂。
* 看懂了怎么用后，有空写点说明？写个demo？补充一下？
* 发现bug，提交一下，讨论一下？

## 好文推荐
* 建议看一下[这篇文章](http://isux.tencent.com/half-package-web-components-for-design.html)，非常好

## Polyfills Projects
* [Modernizr](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills)

## 想法
1、对框架的看法：

  前端的js框架多种多样，最流行的莫过于angularjs和react了，还有kissy，YUI（有点走下坡路呢），不过，我觉得，这种框架都是对原有html标准的破坏，比如react有自己的jsx语法（虽然和html类似，但和标准相去甚远），还有angularjs有自己的好多属性，比如ng-app,ng-model之类的。

  不得不承认，学习任何框架都是有成本的，但前段框架变化又太过于频繁，这学习成本更是沉重。

  我一直都不太喜欢框架，更倾向于js模块和组件（有点工具类的感觉，要用到什么，就加载什么），是那种低耦合，不依赖于框架本身的模块和组件，不是那种基于react、kissy的模块或组件，而是能够直接拿来就能在游览器上跑的组件（当然，可能会依赖requirejs等模块加载工具）

2、对js标准的看法：

  我发现有好多类似的项目可以帮我们磨平游览器差异，以标准方式编码，比如写AJAX，只要```new XMLHttpRequest()```就行，不必为IE考虑，其他交给第三方库，例如[This](https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/XMLHttpRequest/polyfill.js)

  [ieBetter.js](https://github.com/zhoukekestar/ieBetter.js)

  [polyfill-service](https://github.com/Financial-Times/polyfill-service)

3、对css标准的看法：

  我希望我编写css的时候，我也能正常编码，而不靠各种兼容，这跟js的思想是一样的

  比如我会写`formValidator.js`，去支持各种其他游览器不支持的属性，然后我就可以这样写了

  `<input name="abc" placeholder="6个字符" value="123456" pattern="^[0-9]{6}$">`

  `<input name="abc" value="123456" required minlength="6" maxlength="10">`

  有些情况，我甚至会增强一些属性（这和标准有些出入，但也无奈之举，有些时候W3C的标准跟不上需求的变化，所以就。。。。）

  `<input type="email" name="emial" placeholder="email" data-msg='{"email":"emial格式错了啦"}'>`


4、对标准增强的看法（听了[#zhangxinxu#](https://github.com/zhangxinxu)的建议，游览器api可能也会增强，这样会有冲突，有待思考）：

  对原有标准的增强，但不破坏原有系统的api，一般情况，想要加功能，就应该添加一个方法，而我不这么想，任何库、组件，如果学习曲线越陡，越容易被抛弃，

  所以，我想扩展原有系统的api，当然，对于不知情的情况下，不能对他们的代码造成不必要的困扰，所以要兼容原有系统的api

  比如：对于系统的alert方法，添加一个参数用于增强效果展示

  ```js
   var _alert = window.alert;
    window.alert = function(msg, option) {/* Code here*/}
  ```

  1）简单调用，没有额外的代码块需要执行的情况下。调用`alert('your message', false)`函数直接调用即可，后面的false参数表示不使用系统原生的弹出框

  2）alert后还有代码块需要执行，使用`alert('your message', callback-function)`，在callback-function中加入需要执行的代码（同步实现不了，只能callback了）

  效果大概是这样的：

  https://github.com/zhoukekestar/modules/blob/master/src/alert/demo.gif

5、插件参数设置 VS 元素参数设置

  ```js
  var div = document.querySelector('div')
  div.onxxx
  ```
  当你在chrome打上面这段代码的时候，你会发现有onabort,...onprogress,...onerror...等等

  当你使用插件的时候
  ```js
  var ext = $('selector').ext({
    onerror: function(){
      /* code here ... */
    },
    onxxx: function() {
      /* code here ... */
    },
    max: xx
  })

  ```
  当两者结合放一起看的时候，有着相似之处。
  为了方便调用，更自然地去写js代码，同时将原生js代码中的各种原有属性加以利用（跟RESTful中，将HTTP status加以利用类似），
  也可以省去插件初始化的显示调用。一个是以插件为中心，元素为辅助，另一个是以元素为中心，插件为辅助，这两者，我更喜欢后者，将元素从js边缘移至js中心。

  将以下代码
  ```js
  <div id='upload-btn' data-url='/upload'></div>
  var ext = ajaxUpload('#upload-btn', {
    success: function(d) {
    },
    abort: function() {
    }
  });
  // 所有操作围绕ext变量展开
  // 需要显式调用插件的初始化
  ```
  改成
  ```js
  <div data-url='/upload' data-role='ajaxUpload'>upload</div>
  var btn = document.querySelector('#upload-btn');
  btn.onsuccess = function(d) {
  }
  btn.onabort = function() {
  }
  // 所有操作围绕btn元素展开
  // 忽略插件的初始化，也无需关注插件是否初始化正确或成功，只需针对元素
  ```
  在写插件的过程中，从
  ```js

  var ajaxUpload = function(ele, o) {
    var ele = (typeof ele === 'string') ? document.querySelector(ele) : ele,
        options = $.extend({
          /* default options */
        }, o)

    /* init code */

  }

  ```
  改成
  ```js
  document.addEventListener('click', function(e) {

    var target = e.target;
    if (target.getAttribute('data-role') === 'ajaxUpload') {

      if (target.inited === undefined) {
        target.inited = true;
        /* init code */
      }
    }
  })

  // OR

  window.addEventListener('load', function(){

    var ele = document.querySelector('[data-role="ajaxUpload"]');

    /* init code */

  })
  ```



