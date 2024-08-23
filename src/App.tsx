import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import { Container, Description } from "./Styles/styles";
import { FetchDogData, FetchSubBreed } from "./Library/api";
import Loader from "./Componenets/Loader/loader";
import DogForm from "./Componenets/DogForm/dogForm";
import { useSelector } from "react-redux";
import { RootState } from "./Store/store";
import Result from "./Componenets/Result/result";

function App() {
  const [breedList, setbreedList] = useState(null);
  const [subBreeds, setSubBreeds] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const dogStore = useSelector((state: RootState) => state.dog);
  const breedState = dogStore?.breed;
  const imageState = dogStore?.imageResults;

  const fetchData = useCallback(async () => {
    try {
      const result = await FetchDogData().then((data) => {
        setbreedList(data?.message);
        setLoading(false);
      });
    } catch (err) {
      console.error("Fetch  error :", err);
      // setError(err);
    } finally {
      setLoading(false);
    }

    if (breedState !== "all") {
      await FetchSubBreed(breedState)
        .then((data) => {
          setSubBreeds(data?.message);
          setLoading(false);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }, [breedState]);

  useEffect(() => {
    fetchData();
  }, [fetchData, breedState]);

  if (loading) return <Loader />;
  if (!breedList) return <p>No breedList Found</p>;

  return (
    <div className="App">
      <Container>
        <h1>Dog App</h1>
        <Description>
          <ul>
            This is a Dog App built with React JS Using the Dog API. The app
            uses:
            <li>ReactJS & TypeScript </li>
            <li>Reduxtoolkit for State Management</li>
            <li>Axios for fetching Data</li>

          </ul>
        </Description>

        <DogForm
          breedList={breedList}
          subBreeds={subBreeds}
          setImages={setImages}
          setLoading={setLoading}
        />

        {images.length > 0 && <Result images={images} />}
      </Container>
    </div>
  );
}

export default App;
