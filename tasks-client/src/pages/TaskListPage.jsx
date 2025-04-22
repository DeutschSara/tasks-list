import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, addTask, updateTask } from "../services/api";
import { List, ListItem, ListItemText, IconButton, Paper, CircularProgress, TextField, Button, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskEdit from '../components/TaskEdit'; // או הנתיב הנכון לפי המיקום

function TaskListPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editingTask, setEditingTask] = useState(null); // שמירה על המשימה הנוכחית בעריכה

  const loadTasks = async (search = "") => {
    setLoading(true);
    const data = await getTasks(search);
    setTasks(data);
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks(searchTerm);
  };

  const handleAddTask = async () => {
    if (!newTaskTitle.trim()) return;
    await addTask({ title: newTaskTitle });
    setNewTaskTitle("");
    loadTasks(searchTerm);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    loadTasks(value);
  };

  const handleEdit = (task) => {
    setEditingTask(task); // נפתח את חלון העריכה עבור המשימה הזו
  };

  const handleSaveEdit = async (id, newTitle) => {
    await updateTask(id, { title: newTitle });
    setEditingTask(null); // סיום העריכה
    loadTasks(searchTerm);
  };

  const handleCancelEdit = () => {
    setEditingTask(null); // ביטול העריכה
  };

  if (loading) return <CircularProgress />;

  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={2}>
        <TextField
          label="🔍 חיפוש משימה"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          fullWidth
        />

        <Stack direction="row" spacing={2}>
          <TextField
            label="משימה חדשה"
            variant="outlined"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            fullWidth
          />
          <Button variant="contained" onClick={handleAddTask}>
            הוסף
          </Button>
        </Stack>

        <List>
          {tasks.map((task) => (
            <ListItem key={task.id} divider>
              {editingTask && editingTask.id === task.id ? (
                <TaskEdit
                  task={task}
                  onSave={handleSaveEdit}
                  onCancel={handleCancelEdit}
                />
              ) : (
                <>
                  <ListItemText primary={task.title} />
                  <IconButton edge="end" onClick={() => handleDelete(task.id)}>
                    <DeleteIcon />
                  </IconButton>
                  <IconButton edge="end" onClick={() => handleEdit(task)}>
                    ✏️
                  </IconButton>
                </>
              )}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Paper>
  );
}

export default TaskListPage;
