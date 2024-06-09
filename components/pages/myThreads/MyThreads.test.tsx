import { render, screen } from "@testing-library/react-native";

import { MyThreads } from ".";

test("MyThreads", () => {
  render(<MyThreads />);

  const title = screen.getByText("My Threads");
  expect(title).toBeOnTheScreen();
});
