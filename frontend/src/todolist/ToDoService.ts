import axios, {AxiosResponse} from "axios";

export type Task = {
    id: number | null,
    text: string,
    status: string
}

type CreateTask = (text: string) => Promise<Task>;
type FetchTasks = () => Promise<Task[]>;

export const createTask: CreateTask = (text) => (
    axios.post('/api/todos', {text, status: 'active'})
        .then((r: AxiosResponse<Task>) => r.data)
)

export const fetchTasks: FetchTasks = () => (
    axios.get('/api/todos')
        .then((r: AxiosResponse<Task[]>) => r.data)
)