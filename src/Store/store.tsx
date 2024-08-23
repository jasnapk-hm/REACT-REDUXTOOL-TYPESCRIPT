import { configureStore } from "@reduxjs/toolkit";

import dogSlice from "./Slice/dogslice";
import {State} from '../Types/type'

export const store = configureStore({ reducer: { dog: dogSlice } });


export interface RootState {
    dog: State;
  }
