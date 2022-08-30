import * as React from 'react';
import {expect} from "vitest";
import App from "../App";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {setupServer} from "msw/node";
import {rest} from "msw";
import Home from "../Home";
import AnotherPage from "../AnotherPage";

describe("App", () => {

    const server = setupServer()
    beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
    afterAll(() => server.close())
    afterEach(() => server.resetHandlers())

    describe('Home', () => {
        it('should run a simple test', () => {
            render(<Home/>);
            expect(screen.getByText("Vite + React")).toBeInTheDocument();
        });

        it('should increment counter button', async () => {
            render(<Home/>);
            await userEvent.click(screen.getByRole("button", {name: "count is 0"}));
            expect(screen.queryByRole("button", {name: "count is 0"})).toBeNull();
            await userEvent.click(screen.getByRole("button", {name: "count is 1"}));
            expect(screen.queryByRole("button", {name: "count is 1"})).toBeNull();
            expect(screen.getByRole("button", {name: "count is 2"})).toBeInTheDocument();
        });
    })

    describe('App', () => {
        it('should navigate between react router routes', async () => {
            server.use(rest.get('/api/sample', (req, res, ctx) =>
                res(ctx.status(200), ctx.json("mock response from server"))
            ))
            render(<App/>);
            expect(screen.getByText("Vite + React")).toBeInTheDocument();
            await userEvent.click(screen.getByRole("link", {name: "Another Page"}));
            expect(screen.getByText("A different React Router route")).toBeInTheDocument();

            await userEvent.click(screen.getByRole("link", {name: "Home"}));
            expect(screen.getByText("Vite + React")).toBeInTheDocument();
        });
    })

    describe('Another Page', () => {
        it('should display text from server', async () => {
            server.use(rest.get('/api/sample', (req, res, ctx) =>
                res(ctx.status(200), ctx.json("mock response from server"))
            ))
            render(<AnotherPage/>);
            expect(await screen.findByText("mock response from server")).toBeInTheDocument();
        });
    })
});