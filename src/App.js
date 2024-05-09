import styled from "styled-components";

export const Wrapper = styled.div`
  height: auto;
  display: grid;
  justify-items: center;
  object-fit: cover;
  background-color: #fafafa;
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
