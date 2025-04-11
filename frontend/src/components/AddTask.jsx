import React, { useState, useContext } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/AddTask.css'; // CSS import
import { TaskContext } from '../context/TaskContext'; // NEW

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');

  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext); // NEW

  const handleAddTask = () => {
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      dueDate: taskDueDate,
    };
    addTask(newTask); // SAVE task to context
    navigate('/listask'); // REDIRECT to task list
  };

  return (
    <Grid container component="main" className="add-task-container">
      <Paper elevation={6} square>
        <div className="add-task-form">
          <Typography component="h1" variant="h5">
            Add Task
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Due Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={taskDueDate}
            onChange={(e) => setTaskDueDate(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleAddTask}
          >
            Add Task
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default AddTask;
