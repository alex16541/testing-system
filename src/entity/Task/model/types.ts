export type TaskType =
  | "single_select"
  | "multy_select"
  | "short_text"
  | "long_text";

export interface TaskBase {
  type: TaskType;
  description: string;
}

export interface TaskSingleSelect extends TaskBase {
  type: "single_select";
  variants: { label: string; value: string }[];
  value?: string;
}

export interface TaskMultySelect extends TaskBase {
  type: "multy_select";
  variants: { label: string; value: string }[];
  value?: string[];
}

export interface TaskShortText extends TaskBase {
  type: "short_text";
  value?: string;
}

export interface TaskLongText extends TaskBase {
  type: "long_text";
  value?: string;
}

export type Task =
  | TaskSingleSelect
  | TaskMultySelect
  | TaskShortText
  | TaskLongText;
