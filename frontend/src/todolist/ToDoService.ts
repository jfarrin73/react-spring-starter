import axios, {AxiosResponse} from "axios";

export type ToDo = {
    id: number | null,
    text: string,
    status: string
}

type CreateToDo = (text: string) => Promise<ToDo>;
type FetchToDos = () => Promise<ToDo[]>;
type DeleteToDo = (id: number | null) => Promise<void>;

export const createToDo: CreateToDo = (text) => (
    axios.post('/api/todos', {text, status: 'active'})
        .then((r: AxiosResponse<ToDo>) => r.data)
)

export const fetchToDos: FetchToDos = () => (
    axios.get('/api/todos')
        .then((r: AxiosResponse<ToDo[]>) => r.data)
)

export const deleteToDo: DeleteToDo = async (id: number | null) => (
  await axios.delete(`/api/todos/${id}`)
)