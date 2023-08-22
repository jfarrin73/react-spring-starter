import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {ToDoListPage} from "../ToDoListPage";
import {expect} from "vitest";
import * as toDoService from '../ToDoService'

describe('ToDoList', () => {
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('should send new to do when add button clicked', async () => {
        const newTask = 'new Task';
        vi.spyOn(toDoService, 'fetchTasks').mockResolvedValue([]);
        const mockCreateTask = vi.spyOn(toDoService, 'createTask').mockResolvedValueOnce({id: 10, text: newTask, status: 'active'});
        render(<ToDoListPage/>)
        const taskInput = screen.getByLabelText('Task');
        await userEvent.type(taskInput, newTask);
        const addButton = screen.getByRole('button', {name: 'Add'});
        await userEvent.click(addButton);
        expect(mockCreateTask).toHaveBeenCalledWith(newTask);
        expect(mockCreateTask).toHaveBeenCalledOnce();
        expect(screen.getByLabelText('Task')).toHaveValue('');
        expect(await screen.findByText(newTask)).toBeVisible()
    });

    it('should not call createTask if no text has been entered', async () => {
        vi.spyOn(toDoService, 'fetchTasks').mockResolvedValue([]);
        const mockCreateTask = vi.spyOn(toDoService, 'createTask')
            .mockRejectedValue('create Task was called, but should not have been');
        render(<ToDoListPage/>)
        const addButton = screen.getByRole('button', {name: 'Add'});
        await userEvent.click(addButton);
        expect(mockCreateTask).not.toHaveBeenCalled();
    });

    it('should display existing tasks with checkboxes checked if complete', async () => {
        const expected = [
            {id: 10, text: 'incomplete task', status: 'active'},
            {id: 11, text: 'complete task', status: 'complete'},
        ]
        const mockFetchTasks = vi.spyOn(toDoService, 'fetchTasks')
            .mockResolvedValue(expected);

        render(<ToDoListPage/>)
        expect(mockFetchTasks).toHaveBeenCalledOnce();
        expect(await screen.findByText('incomplete task')).toBeVisible();
        expect(await screen.findByText('complete task')).toBeVisible();
        const checkboxes = await screen.findAllByRole('checkbox');
        expect(checkboxes[0]).not.toBeChecked();
        expect(checkboxes[1]).toBeChecked();
    });
});