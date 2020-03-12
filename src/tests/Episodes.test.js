import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "../api/fetchShow";
import Episodes from "../components/Episodes";
import App from "../App";
import { data } from "../mockData";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

jest.mock("../api/fetchShow");

test("Chooses the correct episode", async () => {
  mockFetchShow.mockResolvedValueOnce(data);
  const { getByText } = render(<App />);
  await wait(() => {
    getByText(/Select a season/i);
  });

  const dropDown = getByText(/select a season/i);
  userEvent.click(dropDown);
  const seasonText = getByText(/season 1/i);
  userEvent.click(seasonText);
  const episodeText = getByText(/chapter one/i);

  expect(episodeText).toBeInTheDocument();
});
