import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchShow as mockFetchShow } from "../api/fetchShow";
import Episodes from "../components/Episodes";
import App from "../App";
import { data } from "../mockData";
import { act } from "react-dom/test-utils";

jest.mock("../api/fetchShow");

test("renders the app ", () => {
  //V  this is new. No idea, will need to study.
  act(() => {
    mockFetchShow.mockResolvedValueOnce(data);
  });
  render(<App />);
});

test("correct episodes populate when you select a season", async () => {
  //have no idea what this is V. It's pulling from the mock data, and mocking a resolve, I guess
  mockFetchShow.mockResolvedValueOnce(data);
  //this is relatively simple part  V
  const { getByTestId, getByText } = render(<App />);
  //the await wait function..for the async call V  study heavily as it was not defined well in lecture.
  await wait(() => {
    getByText(/Select a season/i);
  });

  // creating the actual parameters into a constant.
  const dropDown = getByText(/Select a season/i);
  //userEvent.click passing in the event that is being clicked V
  userEvent.click(dropDown);

  const text = getByText(/Season 1/i);

  expect(text).toBeInTheDocument();
  userEvent.click(text);
  getByText(/Season 1, Episode 1/i);
});
