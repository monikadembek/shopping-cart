import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin: 40px auto;
  text-align: center;

  .header {
    margin-bottom: 40px;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
  max-width: 1300px;
  width: 96%;
  margin: 0 auto;
`;

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
