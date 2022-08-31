import React from "react";
import Register from "../Register";
import { fireEvent, render, waitFor } from "@testing-library/react-native";

describe("Register screen", () => {
  it("Submit form with valid arguments", async () => {
    const navigation = { navigate: () => {} };
    jest.spyOn(navigation, "navigate");
    const { getByTestId } = render(<Register navigation={navigation} />);

    fireEvent.changeText(getByTestId("usernameField"), "abc123");
    fireEvent.changeText(getByTestId("passwordField"), "password");
    fireEvent.press(getByTestId("registerButton"));

    await waitFor(() => {
      expect(navigation.navigate).toHaveBeenCalledTimes(1);
    });
  });
  it("Dont submit form with invalid arguments", async () => {
    const navigation = { navigate: () => {} };
    jest.spyOn(navigation, "navigate");
    const { getByTestId } = render(<Register navigation={navigation} />);

    fireEvent.changeText(getByTestId("usernameField"), "abc123");
    fireEvent.changeText(getByTestId("passwordField"), "p");
    fireEvent.press(getByTestId("registerButton"));

    await waitFor(() => {
      expect(navigation.navigate).toHaveBeenCalledTimes(0);
    });
  });
});
