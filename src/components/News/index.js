import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  margin-top: 120px;
  color: black;
  margin-bottom: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 12px 0px #0000002b;
  transition: background-color 0.3s ease, color 0.3s ease;
  @media screen and (max-width: 425px) {
    font-size: 30px;
  }
`;

export const Container = styled.div`
  width: 93%;
  padding-right: (1.5rem, 0.75rem);
  padding-left: (1.5rem, 0.75rem);
  margin-right: auto;
  margin-left: auto;
`;

export const card = {
  marginTop: "10px",
  marginBottom: "50px",
};
