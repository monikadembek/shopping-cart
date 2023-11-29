import { PropsWithChildren } from "react";
import { PrimaryButton, OutlinedButton, InvertedButton } from "./Button.style";

type ButtonType = "primary" | "inverted" | "outlined";

type ButtonProps = {
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
        <PrimaryButton {...delegated} onClick={handleClick}>
          {children}
        </PrimaryButton>
      );
    case "inverted":
      return (
        <InvertedButton {...delegated} onClick={handleClick}>
          {children}
        </InvertedButton>
      );
    case "outlined":
      return (
        <OutlinedButton {...delegated} onClick={handleClick}>
          {children}
        </OutlinedButton>
      );
    default:
      return (
        <PrimaryButton {...delegated} onClick={handleClick}>
          {children}
        </PrimaryButton>
      );
  }
}

export default Button;
