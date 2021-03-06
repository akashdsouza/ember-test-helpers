// from https://mdn.mozilla.org/en-US/docs/Web/Events
export const KNOWN_EVENTS = Object.freeze([
  'abort',
  'afterprint',
  'animationend',
  'animationiteration',
  'animationstart',
  'appinstalled',
  'audioprocess',
  'audioend ',
  'audiostart ',
  'beforeprint',
  'beforeunload',
  'beginEvent',
  'blocked	',
  'blur',
  'boundary ',
  'cached',
  'canplay',
  'canplaythrough',
  'change',
  'chargingchange',
  'chargingtimechange',
  'checking',
  'click',
  'close',
  'complete',
  'compositionend',
  'compositionstart',
  'compositionupdate',
  'contextmenu',
  'copy',
  'cut',
  'dblclick',
  'devicechange',
  'devicelight',
  'devicemotion',
  'deviceorientation',
  'deviceproximity',
  'dischargingtimechange',
  'downloading',
  'drag',
  'dragend',
  'dragenter',
  'dragleave',
  'dragover',
  'dragstart',
  'drop',
  'durationchange',
  'emptied',
  'end',
  'ended',
  'endEvent',
  'error',
  'focus',
  'focusin',
  'focusout',
  'fullscreenchange',
  'fullscreenerror',
  'gamepadconnected',
  'gamepaddisconnected',
  'gotpointercapture',
  'hashchange',
  'lostpointercapture',
  'input',
  'invalid',
  'keydown',
  'keypress',
  'keyup',
  'languagechange ',
  'levelchange',
  'load',
  'loadeddata',
  'loadedmetadata',
  'loadend',
  'loadstart',
  'mark ',
  'message',
  'messageerror',
  'mousedown',
  'mouseenter',
  'mouseleave',
  'mousemove',
  'mouseout',
  'mouseover',
  'mouseup',
  'nomatch',
  'notificationclick',
  'noupdate',
  'obsolete',
  'offline',
  'online',
  'open',
  'orientationchange',
  'pagehide',
  'pageshow',
  'paste',
  'pause',
  'pointercancel',
  'pointerdown',
  'pointerenter',
  'pointerleave',
  'pointerlockchange',
  'pointerlockerror',
  'pointermove',
  'pointerout',
  'pointerover',
  'pointerup',
  'play',
  'playing',
  'popstate',
  'progress',
  'push',
  'pushsubscriptionchange',
  'ratechange',
  'readystatechange',
  'repeatEvent',
  'reset',
  'resize',
  'resourcetimingbufferfull',
  'result ',
  'resume ',
  'scroll',
  'seeked',
  'seeking',
  'select',
  'selectstart',
  'selectionchange',
  'show',
  'soundend ',
  'soundstart ',
  'speechend',
  'speechstart',
  'stalled',
  'start',
  'storage',
  'submit',
  'success',
  'suspend',
  'SVGAbort',
  'SVGError',
  'SVGLoad',
  'SVGResize',
  'SVGScroll',
  'SVGUnload',
  'SVGZoom',
  'timeout',
  'timeupdate',
  'touchcancel',
  'touchend',
  'touchmove',
  'touchstart',
  'transitionend',
  'unload',
  'updateready',
  'upgradeneeded	',
  'userproximity',
  'voiceschanged',
  'versionchange',
  'visibilitychange',
  'volumechange',
  'waiting',
  'wheel',
]);

let uuid = 0;
export function buildInstrumentedElement(elementType) {
  let assert = QUnit.config.current.assert;

  let element = document.createElement(elementType);
  element.setAttribute('id', `fixture-${uuid++}`);

  KNOWN_EVENTS.forEach(type => {
    element.addEventListener(type, e => {
      assert.step(type);
      assert.ok(e instanceof Event, `${type} listener should receive a native event`);
    });
  });

  let fixture = document.querySelector('#ember-testing');
  fixture.appendChild(element);

  return element;
}
