import React from "react";
import { RootState } from "../../../Store/store";

import { useSelector } from "react-redux";
const DogInfo = () => {
  const dogStore = useSelector((state: RootState) => state.dog);

  const breedState = dogStore?.breed;
  const imageState = dogStore?.imageResults;

  const subBreedstate = dogStore?.subBreed;
  console.log("imageState", imageState);
  function capitalizeBreed(string: string) {
    return string.replace(/(?:^|\s)\S/g, function (a) {
      return a.toUpperCase();
    });
  }

  const renderTitle = () => {
    if (breedState !== "all" && subBreedstate !== "all")
      return (
        <span>
          {capitalizeBreed(breedState)} - {capitalizeBreed(subBreedstate)}
        </span>
      );
    if (breedState !== "all" && subBreedstate === "all")
      return <span>{capitalizeBreed(breedState)}</span>;
    return null;
  };

  return <>{renderTitle()}</>;
};

export default DogInfo;
