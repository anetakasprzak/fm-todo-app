import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
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

export const MainContent = styled.div`
  margin-top: -15rem;
  padding: 0rem 2.4rem;
`;

export const Logo = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1rem;

  @media only screen and (min-width: 28rem) {
    font-size: 3.2rem;
    letter-spacing: 1.2rem;
  }

  @media only screen and (min-width: 37.75rem) {
    font-size: 3.6rem;
    letter-spacing: 1.3rem;
  }

  @media only screen and (min-width: 50rem) {
    font-size: 4rem;
    letter-spacing: 1.5rem;
  }
`;

export const Input = styled.input``;

export const List = styled.ul``;

export const Item = styled.li`
  font-size: 16px;
  color: #fff;
`;

export const Form = styled.form``;

export const Button = styled.button``;
