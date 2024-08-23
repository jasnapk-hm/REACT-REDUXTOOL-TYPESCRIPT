import React from "react";
import { Container } from "./style";
import DogInfo from "./DogInfo/dogInfo";
import Images from "./Image/images";

interface Props {
  images: any;
}
const Result = ({ images }: Props) => {
  return (
    <Container>
      <h1>Gallery</h1>
      <DogInfo />
      <Images images={images} />
    </Container>
  );
};

export default Result;
