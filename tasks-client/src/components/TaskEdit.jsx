import React, { useState } from 'react';
import { TextField, IconButton, Button } from '@mui/material';
import { Save } from '@mui/icons-material';

const TaskEdit = ({ task, onSave, onCancel }) => {
  const [editText, setEditText] = useState(task.title);

  const handleSave = () => {
    if (editText.trim()) {
      onSave(task.id, editText); 
    }
  };

  return (
    <div>
      <TextField
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleSave}>
        <Save /> שמור
      </Button>
      <Button onClick={onCancel}>ביטול</Button>
    </div>
  );
};

export default TaskEdit;
