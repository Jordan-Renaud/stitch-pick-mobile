import { render, screen } from "@testing-library/react-native";

import { ExplorePatterns } from ".";

test("Explore", () => {
  render(<ExplorePatterns />);

  const title = screen.getByText("Explore Patterns");
  expect(title).toBeOnTheScreen();
});
