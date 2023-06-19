import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import TaskAlert from './TaskAlert';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const TaskItem = ({ index, task, editTask, deleteTask }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [completed, setCompleted] = useState(task.completed);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    const updatedTask = { ...task, title };
    editTask(index, updatedTask);
    setEditing(false);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  const handleCheckboxChange = (event) => {
    const updatedTask = { ...task, completed: event.target.checked };
    editTask(index, updatedTask);
    setCompleted(event.target.checked);
  };

  return (
    <li>
      <Checkbox
        checked={completed}
        onChange={handleCheckboxChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      {editing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}
      {!completed && <TaskAlert task={task} />} {/* Muestra la alerta cuando la tarea no está completada */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleEdit}>Editar</Button>
        <Button variant="contained" color="success" onClick={handleSave}>Guardar</Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>Borrar</Button>
      </Stack>
    </li>
  );
};

export default TaskItem;
