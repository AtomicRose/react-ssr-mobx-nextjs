(function (win, lib) {
    var phoneTypeWidth = 768;
    var phoneTranslateWidth = 540;

    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});
    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        dpr = devicePixelRatio || 1;
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'width=device-width,initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem() {
        var width = docEl.getBoundingClientRect().width;


        var rem = width / 10;
        if (width / dpr > phoneTranslateWidth) {
            rem = phoneTranslateWidth * dpr / 10;
        }
        if (width / dpr > phoneTypeWidth) {
            rem = 14;
        }
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function () {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function (e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }


    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function (d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function (d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }
})(window, window['lib'] || (window['lib'] = {}));
// 增加各类浏览器的兼容
var polyfillArray = [];
if (!window.fetch) {
    polyfillArray.push('https://cdn.staticfile.org/fetch/2.0.3/fetch.min.js');
}
if (!window.Promise) {
    polyfillArray.push('https://cdn.staticfile.org/bluebird/3.5.0/bluebird.min.js');
}
if (!window.requestAnimationFrame) {
    polyfillArray.push('/static/raf-polyfill.min.js')
}
if (typeof Object.assign !== 'function') {
    polyfillArray.push('https://cdn.staticfile.org/es6-shim/0.35.3/es6-shim.min.js', 'https://cdn.staticfile.org/es6-shim/0.35.3/es6-sham.min.js');
}
if (polyfillArray.length > 0) {
    for (var i = 0; i < polyfillArray.length; i++) {
        var sNew = document.createElement('script');
        sNew.async = true;
        sNew.src = polyfillArray[i];
        var s0 = document.getElementsByTagName('script')[0];
        s0.parentNode.insertBefore(sNew, s0);
    }
}
