import React from "react";
import { render } from "@testing-library/react";
import App from "../src/App";

test("Renders", () => {
  const { getByText } = render(<App />);
  expect(true).toBe(true);
});
