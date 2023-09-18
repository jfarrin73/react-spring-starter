import {ToDo} from "./ToDoService";
import {Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {DeleteOutline} from "@mui/icons-material";
import {useState} from "react";

type ToDoProps = { initialToDo: ToDo };
export const ToDoCard = ({initialToDo}: ToDoProps) => {

    const [toDo, setToDo] = useState<ToDo>(initialToDo);

    const handleClick = () => {
        setToDo((t) => ({
            ...t,
            status: t.status === 'complete' ? 'active' : 'complete'
        }))
    }

    return (
        <ListItem
            sx={{mt: 1, borderRadius: 1, backgroundColor: grey[900], overflow: "hidden"}}
            secondaryAction={
                <IconButton color="error" edge="end" aria-label="comments">
                    <DeleteOutline/>
                </IconButton>
            }
            disablePadding>
            <ListItemButton
                role={undefined}
                dense
                onClick={handleClick}>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={toDo.status === 'complete'}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <Typography fontSize="large">{toDo.text}</Typography>
            </ListItemButton>
        </ListItem>)
};