import React from "react";
import { render } from "@testing-library/react";

import { Card } from "./Card";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Card>Button</Card>);
  });
});
