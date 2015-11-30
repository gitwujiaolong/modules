/**
 * WHY?
 * @see http://caniuse.com/#feat=customevent
 *
 * HOW?
 * @see  https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/Event/polyfill.js
 *
 */

(function(global){

  var ok = function() {

    // Android 4.3- not support customEvent, but reuturn ture.
    // KTouch android/4.3
    // Nexus android 4.3
    var ua = global.navigator.userAgent.toLowerCase();
    if (ua.indexOf('android/4.3') !== -1 || ua.indexOf('android/4.2') !== -1 || ua.indexOf('android/4.1') !== -1 ||
        ua.indexOf('android 4.3') !== -1 || ua.indexOf('android 4.2') !== -1 || ua.indexOf('android 4.1') !== -1) {
      return false;
    }

    if (!('Event' in global)) return false;
    if (typeof global.Event === 'function') return true;

    try {

      // In IE 9 and 10, the Event object exists but cannot be instantiated
      new Event('click');
      return true;
    } catch(e) {
      return false;
    }
  }

  if (!ok()) {

    global.Event = function Event(type, eventInitDict) {
      if (!type) {
        throw new Error('Not enough arguments');
      }

      var
      event = document.createEvent('Event'),
      bubbles = eventInitDict && eventInitDict.bubbles !== undefined ? eventInitDict.bubbles : false,
      cancelable = eventInitDict && eventInitDict.cancelable !== undefined ? eventInitDict.cancelable : false;

      event.initEvent(type, bubbles, cancelable);

      return event;
    };
  }


  /* Fix */
  if (document.body.style.animation !== '') {
    var _addEventListener = HTMLElement.prototype.addEventListener;
    HTMLElement.prototype.addEventListener = function() {

      var type = arguments[0]
        , func = arguments[1]
        , capture = arguments[2];

      if (type === 'animationend') {

        _addEventListener.call(this, 'webkitAnimationEnd', func, capture)

      } else if (type === 'animationstart') {

        _addEventListener.call(this, 'webkitAnimationStart', func, capture)

      } else {
        _addEventListener.call(this, type, func, capture)
      }
    }
  }

})(window);
