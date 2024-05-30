import { configureStore } from "@reduxjs/toolkit";
import { TestReducer } from "@/entity/Test";

const store = configureStore({
  reducer: {
    test: TestReducer,
  },
});

export default store;
