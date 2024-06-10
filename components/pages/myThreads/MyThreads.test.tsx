import { render, screen, userEvent } from "@testing-library/react-native";

import { MyThreads } from ".";

jest.useFakeTimers();

describe("MyThreads", () => {
  test("renders the initial no threads found", () => {
    render(<MyThreads />);

    expect(screen.getByText("No threads found")).toBeOnTheScreen();
    expect(screen.getByPlaceholderText("Add a new thread")).toBeOnTheScreen();
    expect(screen.getByRole("button", { name: "Add" })).toBeOnTheScreen();
  });

  test("renders the threads view when threads are added", async () => {
    render(<MyThreads />);
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    await user.type(screen.getByPlaceholderText("Add a new thread"), "green");
    await user.press(screen.getByRole("button", { name: "Add" }));

    const title = await screen.findByText("My Threads");
    expect(title).toBeOnTheScreen();
    expect(screen.getByText("green")).toBeOnTheScreen();
    expect(screen.getByText("DMC 123")).toBeOnTheScreen();
  });

  test("can increase and decrease the thread count", async () => {
    render(<MyThreads />);
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    await user.type(screen.getByPlaceholderText("Add a new thread"), "green");
    await user.press(screen.getByRole("button", { name: "Add" }));

    const dmcNumber = await screen.findByText("DMC 123");
    expect(dmcNumber).toBeOnTheScreen();
    expect(screen.getByText("green")).toBeOnTheScreen();
    expect(screen.getByText("Count: 1")).toBeOnTheScreen();

    await user.press(screen.getByRole("button", { name: "+" }));
    expect(screen.getByText("Count: 2")).toBeOnTheScreen();

    await user.press(screen.getByRole("button", { name: "-" }));
    expect(screen.getByText("Count: 1")).toBeOnTheScreen();
  });

  test("removes thread when thread count = 0", async () => {
    render(<MyThreads />);
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });

    await user.type(screen.getByPlaceholderText("Add a new thread"), "green");
    await user.press(screen.getByRole("button", { name: "Add" }));

    const count = await screen.findByText("Count: 1");
    expect(count).toBeOnTheScreen();

    await user.press(screen.getByRole("button", { name: "-" }));
    expect(screen.queryByText("green")).toBeNull();
  });
});
