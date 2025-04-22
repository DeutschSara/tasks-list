const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

let tasks = require('./tasks.json');

const saveTasksToFile = () => {
    fs.writeFileSync('./tasks.json', JSON.stringify(tasks, null, 2));
  };
  
//  שליפת כל המשימות לפי סינון 
app.get('/tasks', (req, res) => {
    const search = req.query.search?.toLowerCase() || "";
    const filteredTasks = tasks.filter(task =>
      task.title.toLowerCase().includes(search)
    );
    res.json(filteredTasks);
  });
  

// הוספת משימה
app.post('/tasks', (req, res) => {
    const newTask = {
      id: Date.now(),
      title: req.body.title,
    };
    tasks.push(newTask);
    saveTasksToFile(); // ← נשמר לקובץ
    res.status(201).json(newTask);
  });


// מחיקת משימה
app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    tasks = tasks.filter((task) => task.id !== id);
    saveTasksToFile(); // ← עדכון הקובץ
    res.status(204).send();
  });
  //  עדכון משימה
app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const updatedTitle = req.body.title;
  
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      return res.status(404).json({ message: "Task not found" });
    }
  
    tasks[taskIndex].title = updatedTitle;
    saveTasksToFile(); // ← עדכון בקובץ
    res.json(tasks[taskIndex]);
  });
  

// הרצת השרת
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

