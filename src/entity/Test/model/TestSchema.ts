import { Task } from "@/entity/Task";
import { TestStatus } from "./types";

export interface TestSchema {
  name: string;
  tasks: Task[];
  time?: string;
  currentTask: number;
  status: TestStatus;
  _inited: boolean;
  isLoading: boolean;
}
