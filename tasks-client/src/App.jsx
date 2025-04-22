// src/App.jsx
import React from "react";
import { Container, Typography } from "@mui/material";
import TaskListPage from "./pages/TaskListPage";

function App() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        📝 רשימת משימות
      </Typography>
      <TaskListPage />
    </Container>
  );
}

export default App;
