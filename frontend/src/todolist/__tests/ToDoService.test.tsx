import {setupServer} from "msw/node";
import {http, HttpResponse} from "msw";
import {createToDo, fetchToDos, ToDo} from "../ToDoService";
import axios from "axios";

describe('ToDoService', () => {

  axios.defaults.baseURL = "http://localhost:3000"

  const server = setupServer()
  beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
  afterAll(() => server.close())
  afterEach(() => server.resetHandlers())

  it('should send a post request with new toDo', async () => {
    const expected: ToDo = {
      id: 1,
      text: 'new Task',
      status: 'active'
    }
    server.use(http.post('/api/todos', () =>
        HttpResponse.json(expected, {status: 201})
    ))

    expect(await createToDo('new task')).toStrictEqual(expected);
  });

  it('should send a get request to fetch existing tasks', async () => {
    const expected: ToDo[] = [
      {id: 1, text: 'first task', status: 'active'},
      {id: 2, text: 'second task', status: 'active'},
      {id: 3, text: 'third task', status: 'complete'},
    ];

    server.use(http.get('/api/todos', () =>
      HttpResponse.json(expected, {status: 201})
    ))

    expect(await fetchToDos()).toStrictEqual(expected);
  });
});