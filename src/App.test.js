import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  cleanup,
  wait,
  fireEvent,
  waitForElement,
  getByTestId,
  getByText,
  queryByText
} from "@testing-library/react";
import App from "./App";

import { fetchShow as mockFetchShow } from "./api/fetchShow";

jest.mock("./api/fetchShow.js");

test("it works with the API", async () => {
  const { getByText } = render(<App />);

  const episodeNode = await waitForElement(() => getByText(/stranger things/i));

  expect(episodeNode).toBeVisible();
});
