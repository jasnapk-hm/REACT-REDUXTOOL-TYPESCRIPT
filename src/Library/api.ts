import axios from "./axios";

export const FetchDogData = async () => {
  try {
    const res = await axios.get("/breeds/list/all");
    return res?.data;
  } catch (e) {
    if (e instanceof Error) {
      console.log("error msg", e);
    } else {
      console.log("unexpected erroe");
    }
  }
};

export const FetchSubBreed = async (breed: string) => {
  try {
    const res = await axios.get(`breed/${breed}/list`);

    return res?.data;
  } catch (e) {
    if (e instanceof Error) {
      console.log("error msg", e);
    } else {
      console.log("unexpected erroe");
    }
  }
};

export const FetchBreedImage = async (breed: string, number: number) => {
  try {
    const res = await axios.get(`breed/${breed}/images/random/${number}`);
    return res?.data;
  } catch (e) {
    if (e instanceof Error) {
      console.log("error msg", e);
    } else {
      console.log("unexpected erroe");
    }
  }
};
