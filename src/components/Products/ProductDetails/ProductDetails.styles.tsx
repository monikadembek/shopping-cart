import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  text-align: center;

  .icon {
    animation: ${spin} 1s linear infinite;
  }
`;

export const StyledProduct = styled.div`
  max-width: 900px;
  width: 96%;
  height: auto;
  display: block;
  margin: 30px auto;

  img {
    height: 300px;
    width: auto;
    margin: 20px auto;
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    margin-bottom: 20px;

    h3 {
      margin: 10px auto;
      color: #170641;
    }
  }

  .description {
    line-height: 1.5;
    padding: 40px 30px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    background-color: #aecaff;
    border-radius: 10px;
  }

  .price {
    color: #170641;
    font-size: 20px;
  }
`;

export const Tag = styled.span`
  background-color: #aecaff;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 14px;
  font-weight: bold;
  align-self: flex-end;
  color: #170641;
`;
