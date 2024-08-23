import React from "react";
import { Container, ImageContainer } from "./style";

interface Props {
  images: string[];
}
const Images = ({ images }: Props) => {
  return (
    <Container>
      {images?.map((image, index) => (
        <ImageContainer key={index}>
          <img src={image} alt="Dog" loading="lazy" />
        </ImageContainer>
      ))}
    </Container>
  );
};

export default Images;
