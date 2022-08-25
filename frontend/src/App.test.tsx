import * as React from 'react';
import {expect} from "vitest";
import App from "./App";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App", () => {
    it('should run a simple test', function () {
        render(<App/>);
        expect(screen.getByText("Vite + React")).toBeInTheDocument();
    });

    it('should navigate between react router routes', async function () {
        render(<App/>);
        expect(screen.getByText("Vite + React")).toBeInTheDocument();
        await userEvent.click(screen.getByRole("link", {name: "Another Page"}));
        expect(screen.getByText("A different React Router route")).toBeInTheDocument();

        await userEvent.click(screen.getByRole("link", {name: "Home"}));
        expect(screen.getByText("Vite + React")).toBeInTheDocument();
    });

    it('should increment counter button', async function () {
        render(<App/>);
        await userEvent.click(screen.getByRole("button", {name: "count is 0"}));
        expect(screen.queryByRole("button", {name: "count is 0"})).toBeNull();
        await userEvent.click(screen.getByRole("button", {name: "count is 1"}));
        expect(screen.queryByRole("button", {name: "count is 1"})).toBeNull();
        expect(screen.getByRole("button", {name: "count is 2"})).toBeInTheDocument();
    });
});