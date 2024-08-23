import React from "react";
import Dropdown from "./Dropdown/dropdown";
import { DogFormContainer } from "./styles";
import { RootState } from "./../../Store/store";

import {
  setBreed,
  setSubBreed,
  setNumber,
} from "../../Store/Slice/dogslice";
import { useDispatch, useSelector } from "react-redux";
import { BreedsType } from "../../Types/type";
import Button from "../Button/button";

interface Props {
  breedList: BreedsType;
  subBreeds: string[];
  setImages: React.Dispatch<React.SetStateAction<never[]>>;
  setLoading: any;
}
const DogForm = ({ breedList, subBreeds, setImages, setLoading }: Props) => {
  const dispatch = useDispatch();

  const dogStore = useSelector((state: RootState) => state.dog);

  const breedState = dogStore?.breed;

  const subBreedstate = dogStore?.subBreed;
  const numberState = dogStore?.number;

  const errorState = dogStore?.error;

  const renderBreed = (value: string) => {
    dispatch(setBreed(value));
  };

  const renderSubBreed = (value: string) => {
    dispatch(setSubBreed(value));
  };

  const renderNumber = (value: number) => {
    dispatch(setNumber(value));
  };
  return (
    <DogFormContainer>
      {" "}
      Dog form
      <Dropdown title="Slecet a breed" showError={errorState}>
        <select
          onChange={(e) => renderBreed(e.target.value)}
          value={breedState}
        >
          <option value="all">Select breed</option>

          {breedList &&
            Object.keys(breedList)?.map((breed: string, index: number) => (
              <option value={breed} key={index}>
                {breed}
              </option>
            ))}
          <option></option>
        </select>
        {""}
      </Dropdown>
      {subBreeds?.length ? (
        <Dropdown title="Slecet a Subbreed" showError={errorState}>
          <select
            onChange={(e) => renderSubBreed(e.target.value)}
            value={subBreedstate}
          >
            <option value="all">Select Sub Breed</option>
            {subBreeds?.length &&
              subBreeds?.map((subBreed: string, index: number) => (
                <option value={subBreed} key={index}>
                  {subBreed}
                </option>
              ))}
            <option></option>
          </select>
          {""}
        </Dropdown>
      ) : null}
      <Dropdown title="No of images" showError={false}>
        <select
          onChange={(e) => renderNumber(Number(e.target.value))}
          value={numberState}
        >
          <option value="all">Select Number</option>
          {Array.from({ length: 50 }, (_, index) => (
            <option value={index + 1} key={index}>
              {index + 1}
            </option>
          ))}
        </select>
        {""}
      </Dropdown>
      <Button setImages={setImages} setisLoading={setLoading} />
    </DogFormContainer>
  );
};

export default DogForm;
