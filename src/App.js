import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  display: grid;
  justify-items: center;
  object-fit: cover;
  background-color: #fafafa;
  color: #494c6b;
`;

export const ImageContainer = styled.div`
  height: 21rem;
  width: 100%;
  background-image: url("./images/bg-mobile-light.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media only screen and (min-width: 31.25rem) {
    height: 33rem;
    background-image: url("./images/bg-desktop-light.jpg");
  }
`;

export const MainContent = styled.div``;
export const Logo = styled.h1``;
export const Input = styled.input``;
export const List = styled.ul``;
export const Item = styled.li``;
export const Form = styled.form``;
export const Button = styled.button``;
