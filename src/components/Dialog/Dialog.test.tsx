import React from "react";
import { render } from "@testing-library/react";

import { Dialog } from "./Dialog";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Dialog>Button</Dialog>);
  });
});
