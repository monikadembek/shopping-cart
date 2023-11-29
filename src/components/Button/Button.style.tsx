import styled from "styled-components";

export const BaseButton = styled.button`
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: #170641;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    background-color: #230966;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: #fff;
  color: #170641;
  transition: background-color 0.3s;

  &:hover {
    background-color: #230966;
  }
`;

export const OutlinedButton = styled(BaseButton)`
  font-weight: bold;
  background-color: transparent;
  color: #170641;
  border: 2px solid #170641;
  transition: background-color 0.3s;

  &:hover {
    background-color: #230966;
    color: #fff;
  }
`;
