# 📋 Tasks List - ניהול משימות

אפליקציית ניהול משימות מבוססת React בצד לקוח ו־Node.js בצד שרת. מאפשרת צפייה, הוספה, מחיקה, עדכון וחיפוש של משימות.

---

## 🧰 טכנולוגיות בשימוש

- ✅ Frontend: React (עם Material-UI ו־Responsive Design)
- ✅ Backend: Node.js + Express
- ✅ תיעוד API: Swagger UI
- ✅ אחסון: קובץ JSON (`tasks.json`)

---

## 📦 הוראות התקנה והרצה

### 1. שיבוט הפרויקט מ־GitHub

```bash
git clone https://github.com/your-username/tasks-list.git
cd tasks-list
2. התקנת צד שרת
bash
Copy
Edit
cd server
npm install
npm start
שרת יעלה בכתובת: http://localhost:4000
Swagger יהיה בכתובת: http://localhost:4000/api-docs

3. התקנת צד לקוח
בחלון חדש:

bash
Copy
Edit
cd client
npm install
npm start
הלקוח יפתח אוטומטית בדפדפן: http://localhost:3000

🧪 פעולות נתמכות
📄 שליפת רשימת משימות (GET /tasks)

➕ הוספת משימה חדשה (POST /tasks)

🗑️ מחיקת משימה (DELETE /tasks/:id)

✏️ עריכת משימה קיימת (PUT /tasks/:id)

🔍 חיפוש וסינון משימות לפי טקסט

🆕 יכולות נוספות שנוספו
✔️ ממשק משתמש רספונסיבי מלא עם Material-UI

✔️ שדה חיפוש וסינון דינמי של משימות

✔️ עריכה ישירה של משימות בלחיצה

✔️ הודעות הצלחה/שגיאה מובנות בממשק

✔️ שמירת נתונים לקובץ tasks.json בצורה מתמדת (כולל בהוספה/עדכון/מחיקה)

📂 מבנה הפרויקט
bash
Copy
Edit
tasks-list/
├── client/         # צד לקוח (React)
├── server/         # צד שרת (Node.js)
│   └── tasks.json  # קובץ הנתונים
├── README.md       # תיעוד הפרויקט
📝 שדות המשימה
שדות חופשיים. כרגע אנו משתמשים ב:

json
Copy
Edit
{
  "id": 1,
  "title": "דוגמה למשימה"
}