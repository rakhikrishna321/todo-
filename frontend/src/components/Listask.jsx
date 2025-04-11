import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
  Stack
} from '@mui/material';
import '../styles/Listask.css'; // Optional CSS

const Listask = () => {
  const { tasks, setTasks } = useContext(TaskContext); // setTasks needed for edit/delete
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState({ title: '', description: '', dueDate: '' });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleSave = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = editedTask;
    setTasks(updatedTasks);
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='diva'>
      <h1>See your listed tasks here!</h1>
      <Grid container spacing={2} padding={4}>
        {tasks.length === 0 ? (
          <Typography>No tasks yet.</Typography>
        ) : (
          tasks.map((task, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  {editingIndex === index ? (
                    <>
                      <TextField
                        fullWidth
                        label="Title"
                        value={editedTask.title}
                        onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                        margin="dense"
                      />
                      <TextField
                        fullWidth
                        label="Description"
                        value={editedTask.description}
                        onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                        margin="dense"
                      />
                      <TextField
                        fullWidth
                        label="Due Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={editedTask.dueDate}
                        onChange={(e) => setEditedTask({ ...editedTask, dueDate: e.target.value })}
                        margin="dense"
                      />
                      <Stack direction="row" spacing={1} mt={1}>
                        <Button variant="contained" color="primary" onClick={handleSave}>
                          Save
                        </Button>
                        <Button variant="outlined" onClick={() => setEditingIndex(null)}>
                          Cancel
                        </Button>
                      </Stack>
                    </>
                  ) : (
                    <>
                      <Typography variant="h6">{task.title}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {task.description}
                      </Typography>
                      <Typography variant="caption" display="block" gutterBottom>
                        Due Date: {task.dueDate}
                      </Typography>
                      <Stack direction="row" spacing={1} mt={1}>
                        <Button variant="outlined" onClick={() => handleEdit(index)}>
                          Edit
                        </Button>
                        <Button variant="contained" color="success" onClick={() => handleDelete(index)}>
                          Done
                        </Button>
                      </Stack>
                    </>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Listask;
