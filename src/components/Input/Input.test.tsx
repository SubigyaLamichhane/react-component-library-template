import React from "react";
import { render } from "@testing-library/react";

import { Input } from "./Input";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Input>Button</Input>);
  });
});
