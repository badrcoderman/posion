// ================================================
// DARKSWORD PAYLOAD v1.5 - VISIBLE LOG ON SCREEN
// داخل القصة الخيالية فقط
// ================================================

console.log("%c[DarkSword] Payload injected - Visible Log Mode Activated", "color: red; font-size: 16px");

let logContainer = null;

// إنشاء صندوق اللوج المرئي على الصفحة
function createVisibleLog() {
    logContainer = document.createElement('div');
    logContainer.style.position = 'fixed';
    logContainer.style.bottom = '20px';
    logContainer.style.left = '20px';
    logContainer.style.width = '420px';
    logContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.92)';
    logContainer.style.color = '#0f0';
    logContainer.style.fontFamily = 'monospace';
    logContainer.style.fontSize = '13px';
    logContainer.style.padding = '15px';
    logContainer.style.border = '2px solid #f00';
    logContainer.style.borderRadius = '8px';
    logContainer.style.zIndex = '999999';
    logContainer.style.overflowY = 'auto';
    logContainer.style.maxHeight = '380px';
    logContainer.style.boxShadow = '0 0 20px red';
    document.body.appendChild(logContainer);

    addLog("DarkSword v1.5 - Visible Attack Log", "#ff0");
    addLog("تم حقن الـ payload بنجاح", "#0f0");
}

// إضافة سطر جديد في اللوج المرئي
function addLog(message, color = "#0f0") {
    if (!logContainer) return;
    
    const entry = document.createElement('div');
    entry.style.margin = '4px 0';
    entry.style.color = color;
    entry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    logContainer.appendChild(entry);
    
    // Scroll للأسفل تلقائيًا
    logContainer.scrollTop = logContainer.scrollHeight;
}

// ======================
// بدء الهجوم مع اللوج المرئي
// ======================

createVisibleLog();

addLog("بدء مرحلة 1: WebKit Type Confusion + JIT Spray", "#f80");
setTimeout(() => {
    addLog("✅ تم إنشاء Use-after-Free Primitive بنجاح", "#0f0");
}, 800);

addLog("بدء مرحلة 2: Sandbox Escape", "#f80");
setTimeout(() => {
    addLog("✅ تم كسر Sandbox - الآن داخل عملية نظامية", "#0f0");
}, 1800);

addLog("بدء مرحلة 3: Kernel Privilege Escalation", "#f80");
setTimeout(() => {
    addLog("تجاوز PAC Protection...", "#ff0");
    addLog("تجاوز TPRO...", "#ff0");
    addLog("✅ تم الحصول على Kernel Read/Write", "#0f0");
}, 2800);

addLog("بدء سرقة البيانات...", "#f80");
setTimeout(() => {
    addLog("جاري استخراج Keychain...", "#ff0");
    addLog("جاري استخراج iMessages...", "#ff0");
    addLog("جاري استخراج كلمات مرور WiFi...", "#ff0");
    addLog("✅ تم سرقة 47 كلمة مرور + 342 صورة + رسائل", "#0f0");
}, 4200);

addLog("بدء التنظيف النهائي...", "#f80");
setTimeout(() => {
    addLog("مسح الـ Cache والـ IndexedDB...", "#ff0");
    addLog("مسح Unified Logs...", "#ff0");
    addLog("✅ تم تنظيف كل الأثر - الجهاز عاد طبيعي", "#0f0");
    addLog("DarkSword Operation Completed Successfully", "#f00");
}, 6500);

// إخفاء اللوج بعد 12 ثانية (اختياري)
setTimeout(() => {
    if (logContainer) {
        logContainer.style.transition = "opacity 2s";
        logContainer.style.opacity = "0";
        setTimeout(() => logContainer.remove(), 2500);
    }
}, 12000);