import React from "react";
import { render } from "@testing-library/react";

import { Callout } from "./Callout";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Callout>Button</Callout>);
  });
});
