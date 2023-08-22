import React, {useEffect, useState} from "react";
import {
    Button,
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";
import {createTask, fetchTasks, Task} from "./ToDoService";
import {grey} from "@mui/material/colors";

export const ToDoListPage = () => {

    const testItems = [
        {id: 1, text: 'Add a Patch endpoint to save complete tasks', status: 'active'},
        {id: 2, text: 'Add a Delete endpoint to delete tasks', status: 'active'},
        {id: 3, text: 'Display "No Tasks Found" when there are no tasks', status: 'active'},
        {id: 4, text: 'Add a button to hide/show complete tasks', status: 'active'},
        {id: 5, text: 'Add edit task functionality', status: 'active'},
    ]

    const [tasks, setTasks] = useState<Task[]>(testItems)
    const [newTaskText, setNewTaskText] = useState<string>('')

    useEffect(() => {
        fetchTasks().then(setTasks);
    }, [])

    const handleAdd = () => {
        if (newTaskText) {
            createTask(newTaskText).then(savedTask => {
                setTasks((currentItems) => [...currentItems, savedTask]);
                setNewTaskText('');
            })
        }
    }

    return (
        <Stack p={4} height='100vh'>
            <Stack mt={7} pb={1} flex='1' overflow='auto'>
                <Typography variant='h5' fontWeight={600}>Your To Do List</Typography>
                <List>
                    {tasks.map(task => (
                        <ListItem key={task.id + task.text}
                                  sx={{mt: 1, borderRadius: 1, backgroundColor: grey[900], overflow: 'hidden'}}
                                  secondaryAction={
                                      <IconButton color='error' edge="end" aria-label="comments">
                                          <DeleteOutline/>
                                      </IconButton>
                                  }
                                  disablePadding>
                            <ListItemButton role={undefined} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={task.status === 'complete'}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <Typography fontSize='large'>{task.text}</Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Stack>
            <Stack direction='row' gap={1}>
                <TextField label='Task' fullWidth value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)}/>
                <Button variant='contained' onClick={handleAdd}>Add</Button>
            </Stack>
        </Stack>
    );
};