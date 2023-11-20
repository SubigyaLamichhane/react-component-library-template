import React from "react";
import { render } from "@testing-library/react";

import { AlertDialog } from "./AlertDialog";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<AlertDialog>Button</AlertDialog>);
  });
});
