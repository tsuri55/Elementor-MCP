# 🚧 WordPress Setup Guide - CloudStore Landing Page

## ⚠️ בעיית חיבור - Host Not Allowed

זיהינו שהשרת שלך מוגן על ידי firewall/proxy שחוסם גישה אוטומטית מהסביבה הזו.

```
Error: 403 Forbidden - Host not allowed
Server: envoy
x-deny-reason: host_not_allowed
```

## ✅ פתרונות אפשריים

### אופציה 1: ייבוא ידני של הדף (מומלץ)

1. **הורד את קובץ ה-JSON של Elementor:**
   ```bash
   node export-elementor-json.js
   ```

   הקובץ ישמר כ: `cloudstore-landing-elementor.json`

2. **צור דף חדש ב-WordPress:**
   - היכנס ל-WordPress Dashboard
   - עבור ל: **עמודים → הוסף חדש** (Pages → Add New)
   - תן שם לדף: "CloudStore - פתרונות אחסון ושרתים"
   - לחץ על **Edit with Elementor**

3. **ייבא את התוכן:**
   - בעורך Elementor, לחץ על האייקון עם 3 נקודות (⋮) למעלה משמאל
   - בחר **Template Library**
   - עבור ללשונית **Import/Export**
   - לחץ על **Import Templates**
   - בחר את הקובץ `cloudstore-landing-elementor.json`
   - אשר את הייבוא

4. **פרסם את הדף:**
   - לחץ על **Publish** כשתסיים

---

### אופציה 2: שימוש ב-HTML הסטטי

אם אתה מעדיף להשתמש בדף ה-HTML המקורי:

1. **קובץ ה-HTML נמצא כאן:**
   `/home/user/Elementor-MCP/landing-page.html`

2. **העלה לשרת:**
   - העלה את הקובץ דרך FTP/SFTP לספריית האתר
   - או הוסף אותו כ-Custom HTML בתוך WordPress

3. **שילוב ב-WordPress:**
   - צור דף חדש
   - הוסף widget של **Custom HTML**
   - העתק את כל התוכן מהקובץ `landing-page.html`
   - הדבק ב-Custom HTML widget
   - פרסם

---

### אופציה 3: הסרת הגבלת ה-Firewall

אם יש לך גישה להגדרות ה-Firewall/WAF:

1. **זהה את ה-IP של הסביבה:**
   ```bash
   curl ifconfig.me
   ```

2. **אפשר גישה מ-IP זה:**
   - היכנס להגדרות ה-Firewall/WAF (Cloudflare, Wordfence, וכו')
   - הוסף את ה-IP לרשימת ה-Whitelist
   - נסה שוב להריץ את הסקריפט:
   ```bash
   node create-landing-page.js
   ```

---

### אופציה 4: העלאה דרך FTP + ייבוא

1. **צור קובץ גיבוי של Elementor:**
   הקובץ `elementor-data.json` כבר נוצר

2. **גש לשרת דרך FTP/SFTP**

3. **העלה את הקובץ לתיקייה זמנית**

4. **ייבא דרך Elementor Template Library**

---

## 📋 הקבצים שנוצרו

| קובץ | תיאור |
|------|--------|
| `landing-page.html` | דף HTML סטטי מלא עם עיצוב |
| `create-landing-page.js` | סקריפט ליצירת דף ב-WordPress |
| `cloudstore-landing-elementor.json` | JSON של Elementor לייבוא |
| `.env` | פרטי התחברות (לא לשיתוף!) |

---

## 🔧 פרטי החיבור שלך

```
WordPress URL: https://samples4.atar.biz/
Username: admin
```

⚠️ **חשוב:** אל תשתף את קובץ ה-`.env` עם אף אחד!

---

## 📞 צריך עזרה?

אם אף אחת מהאופציות לא עבדה, אתה יכול:

1. לבדוק עם מנהל השרת את הגבלות ה-Firewall
2. לבדוק אם יש הגנת Cloudflare או WAF אחר
3. לנסות להריץ את הסקריפט מ-VPS או מחשב אחר
4. להעלות את הדף באופן ידני דרך Elementor

---

## ✨ מה הדף כולל?

הדף שנבנה כולל:

- ✅ Hero Section עם גרדיאנטים מרהיבים
- ✅ Stats Section (99.99% זמינות, 10,000+ לקוחות)
- ✅ 6 תכונות עיקריות (אבטחה, ביצועים, מדרגיות...)
- ✅ 3 תוכניות מחירים (בסיס, מקצועי, ארגוני)
- ✅ טופס יצירת קשר
- ✅ עיצוב Responsive מלא
- ✅ תמיכה בעברית RTL

---

**נוצר ב-2026 | CloudStore Landing Page Builder**
