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
  padding: 0;
  margin: -15rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  @media only screen and (min-width: 31.25rem) {
    margin: -25rem auto;
  }

  @media only screen and (min-width: 35rem) {
    max-width: 54rem;
  }

  @media only screen and (min-width: 37.75rem) {
    gap: 2rem;
  }
`;

export const Logo = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1rem;
  margin-bottom: 2.4rem;

  @media only screen and (min-width: 28rem) {
    font-size: 3.2rem;
    letter-spacing: 1.2rem;
  }

  @media only screen and (min-width: 31.25rem) {
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
  width: 70vw;
  font-family: inherit;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: none;
  padding: 1.4rem 1.2rem;

  @media only screen and (min-width: 28rem) {
    width: 73vw;
  }

  @media only screen and (min-width: 35rem) {
    max-width: 45rem;
  }

  @media only screen and (min-width: 37.75rem) {
    font-size: 1.4rem;
    padding: 1.4rem 2rem;
  }
`;

export const Button = styled.button`
  font-size: inherit;
  font-family: inherit;
  padding: 1.4rem 1.6rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #fff;
  color: #494c6b;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #3a7cfd;
  }

  @media only screen and (min-width: 31.25rem) {
    padding: 1.6rem 2rem;
  }

  @media only screen and (min-width: 37.75rem) {
    font-size: 1.4rem;
  }
`;

export const List = styled.ul`
  background-color: #fff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 0.5rem;
`;

export const Item = styled.li`
  font-size: 1.2rem;
  padding: 1.6rem 2rem;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #494c6b;

  &:not(:last-child) {
    border-bottom: 1px solid #e3e4f1;
  }

  @media only screen and (min-width: 37.75rem) {
    font-size: 1.4rem;
    padding: 2rem 2.4rem;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media only screen and (min-width: 37.75rem) {
    gap: 5rem;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    opacity: ${({ completed }) => (completed ? "0.5" : "1")};
    text-decoration: ${({ completed }) =>
      completed ? "line-through" : "none"};
  }

  @media only screen and (min-width: 37.75rem) {
    gap: 1.5rem;
  }
`;

export const CheckboxWrapper = styled.div`
  display: grid;
  place-items: center;

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

export const DeleteBtn = styled.img`
  height: 1.4rem;
  cursor: pointer;
  display: ${({ completed }) => (completed ? "none" : "block")};
`;

export const ClearLeftBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9495a5;
  padding: 1.6rem 2rem;
`;

export const ItemsLeft = styled.span`
  @media only screen and (min-width: 37.75rem) {
    font-size: 1.4rem;
    padding: 1rem 1.4rem;
  }
`;

export const ClearBtn = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  color: inherit;
  font-size: inherit;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    color: #494c6b;
  }

  @media only screen and (min-width: 37.75rem) {
    font-size: 1.4rem;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0.5rem;
  background-color: #fff;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  padding: 1.6rem 6rem;

  @media only screen and (min-width: 28rem) {
    padding: 1.6rem 8rem;
  }

  @media only screen and (min-width: 37.75rem) {
    padding: 2.2rem 10rem;
  }
`;

export const AllBtn = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  color: ${(props) => (props.filter === "all" ? "#3A7CFD" : "#9495a5")};
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.194px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #494c6b;
  }
`;

export const ActiveBtn = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  color: ${(props) => (props.filter === "active" ? "#3A7CFD" : "#9495a5")};

  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.194px;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    color: #494c6b;
  }
`;

export const CompletedBtn = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  color: ${(props) => (props.filter === "completed" ? "#3A7CFD" : "#9495a5")};

  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.194px;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    color: #494c6b;
  }
`;

export const DragDropText = styled.p`
  text-align: center;
  color: #9495a5;
  font-size: 1.4rem;
  letter-spacing: -0.194px;
  margin-top: 3.2rem;

  @media only screen and (min-width: 37.75rem) {
    font-size: 1.6rem;
  }
`;
