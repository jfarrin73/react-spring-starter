import App from "../App";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {setupServer} from "msw/node";
import HomePage from "../HomePage";

describe("App", () => {

    const server = setupServer()
    beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())

    describe('HomePage', () => {
        it('should run a simple test', () => {
            render(<HomePage/>);
            expect(screen.getByText("Vite + React")).toBeInTheDocument();
        });

        it('should increment counter button', async () => {
            render(<HomePage/>);
            await userEvent.click(screen.getByRole("button", {name: "count is 0"}));
            expect(screen.queryByRole("button", {name: "count is 0"})).toBeNull();
            await userEvent.click(screen.getByRole("button", {name: "count is 1"}));
            expect(screen.queryByRole("button", {name: "count is 1"})).toBeNull();
            expect(screen.getByRole("button", {name: "count is 2"})).toBeInTheDocument();
        });
    })

    describe('Router', () => {
        it('should navigate between react router routes', async () => {
            render(<App/>);
            expect(screen.getByText("Vite + React")).toBeInTheDocument();
            await userEvent.click(screen.getByRole("link", {name: "What's in this App"}));
            expect(screen.getByText("File Structure")).toBeInTheDocument();

            await userEvent.click(screen.getByRole("link", {name: "Home"}));
            expect(screen.getByText("Vite + React")).toBeInTheDocument();
        });
    })
});