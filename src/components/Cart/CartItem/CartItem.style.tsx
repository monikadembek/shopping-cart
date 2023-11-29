import styled from "styled-components";

export const StyledCartItem = styled.div`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 2px solid #aecaff;
  border-radius: 10px;
  background-color: #fff;
  padding: 30px;
  margin: 30px auto;

  .imageContainer {
    width: 30%;
    padding-right: 40px;

    img {
      width: 100%;
      height: auto;
    }
  }

  .content {
    width: 70%;
    text-align: left;
  }

  .counter {
    margin-top: 30px;
    font-weight: bold;
  }

  .quantity {
    padding: 15px;
  }
`;
