import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background: #170641;
  padding: 20px;
  color: #fff;

  a {
    color: #fff;
  }

  a:hover {
    color: #e5f6ff;
  }

  .logo {
    margin-right: auto;
  }

  .links {
    display: flex;

    a {
      margin: 10px;
    }
  }

  .cartIcon {
    position: relative;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -14px;
  right: -14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: #df088c;
  border-radius: 50%;
  padding: 5px;
  font-size: 14px;
  font-weight: bold;
`;
