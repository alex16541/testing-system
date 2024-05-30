import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TestSchema } from "./TestSchema";
import { Task } from "@/entity/Task";
import { TestStatus } from "./types";

const initialState: TestSchema = {
  tasks: [
    {
      type: "short_text",
      description: "ФИО",
    },
    {
      type: "multy_select",
      description: "Select all correct answers.",
      variants: [
        { label: "a", value: "a" },
        { label: "b", value: "b" },
        { label: "c", value: "c" },
        { label: "d", value: "d" },
      ],
    },
    {
      type: "single_select",
      description: "Select correct answers.",
      variants: [
        { label: "a", value: "a" },
        { label: "b", value: "b" },
        { label: "c", value: "c" },
        { label: "d", value: "d" },
      ],
    },
    {
      type: "long_text",
      description: "Write your story.",
    },
  ],
  name: "Тест на офер в гугл",
  currentTask: 0,
  // time: "00:05:00",
  status: "not_started",
  isLoading: false,
  _inited: false,
};

export const Slice = createSlice({
  name: "test",
  initialState,
  reducers: {
    initeState: (state) => {
      const jsonData = localStorage.getItem("test");
      const newState = jsonData
        ? (JSON.parse(jsonData ?? "") as TestSchema)
        : initialState;

      state._inited = newState._inited;
      state.currentTask = newState.currentTask;
      state.isLoading = newState.isLoading;
      state.name = newState.name;
      state.status = newState.status;
      state.time = newState.time;
      state.tasks = newState.tasks;
    },
    setTask: (state, { payload }: PayloadAction<Task>) => {
      state.tasks[state.currentTask] = payload;
      localStorage.setItem("test", JSON.stringify(state));
    },
    nextTask: (state) => {
      state.currentTask++;
      localStorage.setItem("test", JSON.stringify(state));
    },
    prevTask: (state) => {
      state.currentTask--;
      localStorage.setItem("test", JSON.stringify(state));
    },
    setCurrentTask: (state, { payload }: PayloadAction<number>) => {
      state.currentTask = payload;
      localStorage.setItem("test", JSON.stringify(state));
    },
    setTime: (state, { payload }: PayloadAction<string | undefined>) => {
      state.time = payload;
      localStorage.setItem("test", JSON.stringify(state));
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setStatus: (state, { payload }: PayloadAction<TestStatus>) => {
      state.status = payload;
      localStorage.setItem("test", JSON.stringify(state));
    },
  },
});
export const { actions: TestActions, reducer: TestReducer } = Slice;
