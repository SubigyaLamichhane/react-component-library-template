import React from "react";
import { render } from "@testing-library/react";

import { Label } from "./Label";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Label>Label</Label>);
  });
});
