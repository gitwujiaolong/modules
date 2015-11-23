require.config({
  baseUrl: './src/',
  paths: {
    jquery        : '_lib/jquery.min',


    swiper        : '_lib/swiper/swiper.min',
    gaodeMap      : '_lib/gaodeMap',
    jqueryCookie  : '_lib/jquery.cookie.min',
    jqueryLazyload: '_lib/jquery.lazyload.min',
    jweixin       : '_lib/jweixin-1.1.0',


    alert         : 'alert/alert',

    baseUtils     : 'baseUtils/baseUtils',

    citySelect    : 'citySelect/citySelect',
    clearable     : 'clearable/clearable',
    confirm       : 'confirm/confirm',

    events        : 'events/events',

    formJSON      : 'formJSON/formJSON',
    formOnInvalid : 'formValidator/formOnInvalid',
    formValidator : 'formValidator/formValidator',

    imageView     : 'imageView/imageView',

    lazyload      : 'lazyload/lazyload',
    loadpage      : 'loadpage/loadpage',
    loadingPage   : 'loadingPage/loadingPage',

    menu          : 'menu/menu',

    paging        : 'paging/paging',
    popup         : 'popup/popup',
    preview       : 'preview/preview',
    prompt        : 'prompt/prompt',
    pullDown      : 'pull-v2/pullDown',
    pullUp        : 'pull-v2/pullUp',

    shareWX       : 'shareWX/shareWX',

    tabs          : 'tabs/tabs',
    template      : 'template/template',

    toast         : 'toast/toast',
    ajaxUpload    : 'upload/public/ajaxUpload.v2',

    'ajaxUpload-single' : 'upload/public/ajaxUpload-single'
  },
  shim: {
    swiper: {
      exports: 'Swiper'
    },
    gaodeMap: {
      exports: 'AMap'
    },
    jqueryCookie: {
      deps: ['jquery']
    },
    jqueryLazyload: {
      deps: ['jquery']
    },
    jweixin: {
      exports: 'wx'
    }
  },
  _exclude: {

    swiper        : [],
    gaodeMap      : [],
    jqueryCookie  : ['jquery'],
    jqueryLazyload: ['jquery'],
    jweixin       : [],

    alert         : [],

    baseUtils     : ['jquery'],

    citySelect    : ['jquery'],
    confirm       : [],

    formJSON      : [],
    formOnInvalid : [],
    formValidator : [],

    lazyload      : [],
    loadpage      : [],
    loadingPage   : [],

    menu          : [],

    paging        : [],
    popup         : ['jquery'],
    preview       : ['jquery'],
    prompt        : [],
    pullDown      : ['jquery'],
    pullUp        : ['jquery'],

    shareWX       : ['jweixin'],

    tabs          : [],
    template      : [],

    toast         : [],
    ajaxUpload    : [],

    'ajaxUpload-single' : []
  }
});
