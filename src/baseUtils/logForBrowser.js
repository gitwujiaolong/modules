(function(){

  /* Make sure init function run once. */
  if (window.logForBrowser) {
    return;
  }
  window.logForBrowser = true;

  JSON._parse = JSON.parse;
  JSON.parse = function(str) {
    try {
      return JSON._parse(str);
    } catch (e) {
      console.error('JSON.parse error, str:' + str, 'logForBrowser.js', 0, 0, e);
      return {};
    }
  }

  // console.log('logForBrowser init.')

  console._error = console.error;
  console.error = function(msg, url, line, col, err) {
    url   = url   || 'local';
    line  = line  || 1;
    col   = col   || 1;
    err   = (err  && err.stack) || "NO STACK";

    var log = {
      ua        : navigator.userAgent,
      location  : location.href,
      msg       : msg,
      scripturl : url,
      line      : line,
      column    : col,
      stack     : err
    }

    console._error(log);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/log', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(log));

  }

  window.onerror = function(msg, url, line, col, err) {

    url   = url   || 'local';
    line  = line  || 1;
    col   = col   || 1;
    err   = (err  && err.stack) || "NO STACK";

    var log = {
      ua        : navigator.userAgent,
      location  : location.href,
      msg       : msg,
      scripturl : url,
      line      : line,
      column    : col,
      stack     : err
    }

    console.log(log);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/log', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(log));

    if (msg.indexOf('pingpp') !== -1) {
      alert('支付模块未能加载，请尝试刷新网页');
    } else if (msg.indexOf('WeixinJSBridge') !== -1) {
      alert('微信游览器初始化错误，请尝试刷新网页');
    } else if (msg.indexOf('Script error') !== -1 || url === ':0') {

      if (confirm('网页加载过慢，建议刷新一下')) {
        location.reload();
      }

    } else if (msg.indexOf('Illegal constructor') !== -1) {
      alert('您的游览器可能过旧或异常，请刷新网页或请尝试其他游览器。');
    } else {
      alert('抱歉，您的游览器出现未知异常，请刷新网页或请尝试其他游览器。');
    }
  }

})(window);
