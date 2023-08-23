import {setupServer} from "msw/node";
import {rest} from "msw";
import {createToDo, fetchToDos, ToDo} from "../ToDoService";

describe('ToDoService', () => {
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
        server.use(rest.post('/api/todos', (req, res, ctx) =>
            res(ctx.status(201), ctx.json(expected))
        ))

        expect(await createToDo('new task')).toStrictEqual(expected);
    });

    it('should send a get request to fetch existing tasks', async () => {
        const expected: ToDo[] = [
            {id: 1, text: 'first task', status: 'active'},
            {id: 2, text: 'second task', status: 'active'},
            {id: 3, text: 'third task', status: 'complete'},
        ];

        server.use(rest.get('/api/todos', (req, res, ctx) =>
            res(ctx.status(201), ctx.json(expected))
        ))

        expect(await fetchToDos()).toStrictEqual(expected);
    });
});