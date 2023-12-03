import { PropsWithChildren } from "react";
import { PrimaryButton, OutlinedButton, InvertedButton } from "./Button.style";

export type ButtonType = "primary" | "inverted" | "outlined";

export type ButtonProps = {
  type?: ButtonType;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function Button({
  type = "primary",
  handleClick,
  children,
  ...delegated
}: PropsWithChildren<ButtonProps>) {
  switch (type) {
    case "primary":
      return (
        <PrimaryButton
          {...delegated}
          onClick={handleClick}
          data-testid="primaryButton"
        >
          {children}
        </PrimaryButton>
      );
    case "inverted":
      return (
        <InvertedButton
          {...delegated}
          onClick={handleClick}
          data-testid="invertedButton"
        >
          {children}
        </InvertedButton>
      );
    case "outlined":
      return (
        <OutlinedButton
          {...delegated}
          onClick={handleClick}
          data-testid="outlinedButton"
        >
          {children}
        </OutlinedButton>
      );
    default:
      return (
        <PrimaryButton
          {...delegated}
          onClick={handleClick}
          data-testid="primaryButton"
        >
          {children}
        </PrimaryButton>
      );
  }
}

export default Button;
