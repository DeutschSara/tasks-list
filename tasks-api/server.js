// tasks-api/server.js
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
    { id: 1, title: "משימה לדוגמה", completed: false }
];

// API routes
app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
    const task = { id: Date.now(), ...req.body };
    tasks.push(task);
    res.status(201).json(task);
});

app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.map(task =>
        task.id === id ? { ...task, ...req.body } : task
    );
    res.json({ message: "עודכן בהצלחה" });
});

app.delete('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== id);
    res.json({ message: "נמחק בהצלחה" });
});

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(4000, () => console.log('Server is running on http://localhost:4000'));
