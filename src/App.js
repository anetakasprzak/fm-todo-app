import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  object-fit: cover;
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
  width: 90vw;
  padding: 0 2.4rem;
  display: grid;
  align-self: center;
  justify-self: center;
  margin: -15rem auto;

  background-color: pink;
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

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 60vw;
`;

export const Button = styled.button`
  font-size: inherit;
  font-family: inherit;
`;

export const List = styled.ul`
  background-color: #fff;
`;

export const Item = styled.li`
  font-size: 1.6rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  color: #494c6b;
`;

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
`;

export const Label = styled.label`
  display: flex;

  cursor: pointer;

  > * {
    grid-area: 1/1;
  }
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #e3e4f1, #e3e4f1) border-box;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: all 0.2s;

  &:hover {
    background: linear-gradient(white, white) padding-box,
      linear-gradient(to right, #55ddff, #c058f3) border-box;
  }

  &:checked {
    background: linear-gradient(#c058f3, #55ddff) padding-box,
      linear-gradient(to right, #55ddff, #c058f3) border-box;
  }
`;
