import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, addTask, updateTask } from "../services/api";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  CircularProgress,
  TextField,
  Button,
  Stack,
  Snackbar,
  Alert
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskEdit from '../components/TaskEdit';

function TaskListPage() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const showMessage = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const loadTasks = async (search = "") => {
    setLoading(true);
    try {
      const data = await getTasks(search);
      setTasks(data);
    } catch (err) {
      showMessage("שגיאה בטעינת משימות", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      loadTasks(searchTerm);
      showMessage("🗑️ המשימה נמחקה בהצלחה");
    } catch {
      showMessage("❌ שגיאה במחיקת המשימה", "error");
    }
  };

  const handleAddTask = async () => {
    if (!newTaskTitle.trim()) return;
    try {
      await addTask({ title: newTaskTitle });
      setNewTaskTitle("");
      loadTasks(searchTerm);
      showMessage("✅ משימה חדשה נוספה");
    } catch {
      showMessage("❌ שגיאה בהוספת משימה", "error");
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    loadTasks(value);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleSaveEdit = async (id, newTitle) => {
    try {
      await updateTask(id, { title: newTitle });
      setEditingTask(null);
      loadTasks(searchTerm);
      showMessage("✏️ המשימה עודכנה בהצלחה");
    } catch {
      showMessage("❌ שגיאה בעריכת משימה", "error");
    }
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
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

        {/* ✅ הודעות */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Stack>
    </Paper>
  );
}

export default TaskListPage;
