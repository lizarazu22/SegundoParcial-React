import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function TaskAlert({ task }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const hasIncompleteTask = !task.completed;
      setOpen(hasIncompleteTask);
    }, 120000); // 2 minutos

    return () => {
      clearInterval(interval);
    };
  }, [task]);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Hay tareas incompletas. ¡Revísalas!
        </Alert>
      </Collapse>
    </Box>
  );
}
