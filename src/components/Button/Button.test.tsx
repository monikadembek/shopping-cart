import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  test("should render a button", () => {
    const handleClickMock = jest.fn();
    render(
      <Button type="primary" handleClick={handleClickMock}>
        Add to cart
      </Button>,
    );
    const button = screen.getByText("Add to cart");
    expect(button).toBeDefined();
  });

  test("should render primary button when type is not passed", () => {
    const handleClickMock = jest.fn();
    render(<Button handleClick={handleClickMock}>Add to cart</Button>);
    const button = screen.getByTestId("primaryButton");
    expect(button).toBeDefined();
  });

  test("should render primary button when passed type equals 'primary'", () => {
    const handleClickMock = jest.fn();
    render(
      <Button type="primary" handleClick={handleClickMock}>
        Add to cart
      </Button>,
    );
    const button = screen.getByTestId("primaryButton");
    expect(button).toBeDefined();
  });

  test("should render inverted button when passed type equals 'inverted'", () => {
    const handleClickMock = jest.fn();
    render(
      <Button type="inverted" handleClick={handleClickMock}>
        Add to cart
      </Button>,
    );
    const button = screen.getByTestId("invertedButton");
    expect(button).toBeDefined();
  });

  test("should render inverted button when passed type equals 'outlined'", () => {
    const handleClickMock = jest.fn();
    render(
      <Button type="outlined" handleClick={handleClickMock}>
        Add to cart
      </Button>,
    );
    const button = screen.getByTestId("outlinedButton");
    expect(button).toBeDefined();
  });

  test("should allow user to click button and run onClick handler once", async () => {
    const handleClickMock = jest.fn();
    render(
      <Button
        type="primary"
        handleClick={handleClickMock}
        children="Add to cart"
      />,
    );

    const button = screen.getByText("Add to cart");
    await user.click(button);

    expect(handleClickMock).toHaveBeenCalled();
    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
