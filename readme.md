# 📋 Tasks List App

פרויקט ניהול משימות מלא עם ממשק משתמש ב-React וצד שרת ב-Express, כולל תמיכה בחיפוש, עריכה, מחיקה, תיעוד API, ועיצוב מודרני עם Material-UI.

---

## ✨ תכונות עיקריות

- ✅ הצגת כל המשימות
- ➕ הוספת משימה חדשה
- ✏️ עריכת משימה ישירות מהמסך
- ❌ מחיקת משימות
- 🔍 חיפוש / סינון לפי טקסט
- 💾 שמירה לקובץ JSON מקומי
- 📜 תיעוד Swagger ל-API

---

## 🖥️ טכנולוגיות בשימוש

- **Frontend:** React, Material-UI
- **Backend:** Node.js, Express, Swagger
- **Database:** קובץ JSON מקומי

---

## 🧩 מבנה הפרויקט

```
tasks-project/
├── tasks-api/           # צד שרת (Express)
│   ├── server.js
│   ├── tasks.json       # בסיס הנתונים
│   └── swagger.json     # תיעוד API
│
├── tasks-client/        # צד לקוח (React)
│   ├── src/
│   │   ├── pages/
│   │   │   └── TaskListPage.jsx
│   │   ├── components/
│   │   │   └── TaskEdit.jsx
│   │   └── services/
│   │       └── api.js
│   └── package.json
│
└── README.md
```

---

## 🛠️ הוראות התקנה והרצה

### 1. שכפול הריפוזיטורי

```bash
git clone https://github.com/DeutschSara/tasks-list
cd tasks-list
```

---

### 2. התקנת צד השרת והפעלתו

```bash
cd tasks-api
npm install
node server.js
```

> השרת יאזין על פורט 4000  
> תיעוד Swagger נגיש בכתובת: [http://localhost:4000/api-docs](http://localhost:4000/api-docs)

---

### 3. התקנת צד הקליינט והפעלתו

בחלון נוסף:

```bash
cd tasks-client
npm install
npm start
```

> הקליינט יעלה על פורט 3000 וייפתח אוטומטית בדפדפן:  
> [http://localhost:3000](http://localhost:3000)

---

## 🔌 API Endpoints

| פעולה        | נתיב                  | מתודה |
|--------------|------------------------|--------|
| קבלת משימות  | `/tasks`               | GET    |
| הוספת משימה  | `/tasks`               | POST   |
| עדכון משימה  | `/tasks/:id`           | PUT    |
| מחיקת משימה  | `/tasks/:id`           | DELETE |

---

## 📝 תיעוד API

כל הנתיבים והפרמטרים מתועדים דרך Swagger ונגישים בכתובת:
[http://localhost:4000/api-docs](http://localhost:4000/api-docs)


---

## 📌 הערות חשובות

- ודאו שהשרת פועל לפני פתיחת הקליינט.
- ניתן לשנות את הפורטים בקבצי `server.js` או `package.json` בצד הקליינט.

---

## 👩‍💻 נבנה על ידי

SARA DAITSH
> Fullstack Developer - React + Node.js
