import styled from "styled-components";

export const StyledProductTile = styled.div`
  width: 400px;
  height: auto;
  display: block;
  border: 2px solid #aecaff;
  border-radius: 10px;
  background-color: #fff;
  transition: box-shadow 0.3s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px 3px #ccc;
  }

  img {
    height: 300px;
    width: auto;
    margin: 20px auto;
  }

  header {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    margin-bottom: 20px;
    padding: 15px;

    h3 {
      margin: 10px auto;
      color: #170641;
    }
  }

  .content {
    padding: 20px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #aecaff;
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
  margin-top: -17px;
  margin-right: -17px;
  color: #170641;
`;
