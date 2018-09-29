var actualCode = '(' + function() {
    'use strict';
    // var navigator = window.navigator;
    var N = navigator.appVersion;
    var os = 1;
    if (/android/i.test(N)) {
        os = 3;
    } else if (/iphone|ipad|ios|ipod/i.test(N)) {
        os = 2;
    }
    if (os != 1) {
        Object.defineProperty(navigator, "platform", {
            get: function() {
                return os == 2 ? "iPhone" : "Linux armv8l";
            }
        });
    }
    // var modifiedNavigator;
    // if ('userAgent' in Navigator.prototype) {
    //     // Chrome 43+ moved all properties from navigator to the prototype,
    //     // so we have to modify the prototype instead of navigator.
    //     modifiedNavigator = Navigator.prototype;

    // } else {
    //     // Chrome 42- defined the property on navigator.
    //     modifiedNavigator = Object.create(navigator);
    //     Object.defineProperty(window, 'navigator', {
    //         value: modifiedNavigator,
    //         configurable: false,
    //         enumerable: false,
    //         writable: false
    //     });
    // }
    // // Pretend to be Windows XP
    // Object.defineProperties(modifiedNavigator, {
    //     userAgent: {
    //         value: navigator.userAgent.replace(/\([^)]+\)/, 'Windows NT 5.1'),
    //         configurable: false,
    //         enumerable: true,
    //         writable: false
    //     },
    //     appVersion: {
    //         value: navigator.appVersion.replace(/\([^)]+\)/, 'Windows NT 5.1'),
    //         configurable: false,
    //         enumerable: true,
    //         writable: false
    //     },
    //     platform: {
    //         value: 'iphone',
    //         configurable: false,
    //         enumerable: true,
    //         writable: false
    //     },
    // });
} + ')();';

var s = document.createElement('script');
s.textContent = actualCode;
document.documentElement.appendChild(s);
s.remove();
