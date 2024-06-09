import { render, screen } from "@testing-library/react-native";

import { SavedPatterns } from ".";

test("Patterns", () => {
  render(<SavedPatterns />);

  const title = screen.getByText("Saved Patterns");
  expect(title).toBeOnTheScreen();
});
