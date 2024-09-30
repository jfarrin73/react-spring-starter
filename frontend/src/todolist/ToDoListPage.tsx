import {useEffect, useState} from "react";
import {Button, List, Stack, TextField, Typography} from "@mui/material";
import {createToDo, deleteToDo, fetchToDos, ToDo} from "./ToDoService";
import {ToDoCard} from "./ToDoCard";

export const ToDoListPage = () => {
  const [toDos, setToDos] = useState<ToDo[]>([])
  const [newToDoText, setNewToDoText] = useState<string>('')

  const refreshData = () => {
    fetchToDos().then(setToDos)
  };

  useEffect(() => {
    refreshData()
  }, [])

  const handleAdd = () => {
    if (newToDoText) {
      createToDo(newToDoText).then(savedToDo => {
        setToDos((currentItems) => [...currentItems, savedToDo]);
        setNewToDoText('');
      })
    }
  }

  const handleDelete = (id: number | null) => {
    deleteToDo(id).then(refreshData)
  }

  return (
    <Stack p={4} height='100vh'>
      <Stack mt={7} pb={1} flex='1' overflow='auto'>
        <Typography variant='h5' fontWeight={600}>Your To Do List</Typography>
        <List>
          {toDos.map(toDo => (
            <ToDoCard key={toDo.id + toDo.text} initialToDo={toDo} handleDelete={handleDelete}/>
          ))}
        </List>
      </Stack>
      <Stack direction='row' gap={1}>
        <TextField label='Task' fullWidth value={newToDoText} onChange={(e) => setNewToDoText(e.target.value)}/>
        <Button variant='contained' onClick={handleAdd}>Add</Button>
      </Stack>
    </Stack>
  );
};