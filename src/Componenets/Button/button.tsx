import React from "react";
import { useDispatch } from "react-redux";
import { FetchButton, ResetButton } from "./style";
import { reset, setError } from "../../Store/Slice/dogslice";
import { useSelector } from "react-redux";
import { RootState } from "./../../Store/store";
import { FetchBreedImage } from "../../Library/api";

interface Props {
  setImages:  any;
  setisLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const Button = ({ setImages, setisLoading }: Props) => {
  const dispatch = useDispatch();

  const dogStore = useSelector((state: RootState) => state.dog);

  const breedState = dogStore?.breed;
  const numberState = dogStore?.number;
  const subBreedstate = dogStore?.subBreed;
  const handleImageChange = async () => {

    if (breedState === "all") {
      dispatch(setError(true));
    }
    if (breedState !== "all" && subBreedstate === "all") {
      await FetchBreedImage(breedState, numberState)
        .then((data) => {
          if (data?.status === "success" && data?.message?.length) {
            setImages(data.message);
            setisLoading(false);
            dispatch(setImages(data?.message));
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }


    if (breedState !== "all" && subBreedstate !== "all") {
        await FetchBreedImage(breedState, numberState)
          .then((data) => {
            if (data?.status === "success" && data?.message?.length) {
              setImages(data.message);
              setisLoading(false);
              dispatch(setImages(data?.message));
            }
          })
          .catch((e) => {
            console.error(e);
          });
      }

  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <FetchButton role="button" onClick={() => handleImageChange()}>
        Search Dog
      </FetchButton>
      <ResetButton role="button" onClick={() => handleReset()}>
        Reset Search
      </ResetButton>
    </>
  );
};

export default Button;
