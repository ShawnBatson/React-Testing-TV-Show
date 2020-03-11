import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  wait
} from "@testing-library/react";

import fetchShow from "./api/fetchShow";
import App from "./App";

jest.mock("./api/fetshShow");
