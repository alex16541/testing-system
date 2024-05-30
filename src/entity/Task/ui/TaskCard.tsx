import { Card, Flex, Typography } from "antd";
import { ReactElement, memo } from "react";
import { Task } from "../model/types";
import classNames from "classnames";
import { TaskSingleSelectForm } from "./TaskSingleSelectForm";
import { TaskMultySelectForm } from "./TaskMultySelectForm";
import { TaskShortTextForm } from "./TaskShortTextForm";
import { TaskLongTextForm } from "./TaskLongTextForm";
const { Title } = Typography;

interface TaskCardProps {
  className?: string;
  task?: Task | null;
  onChange?: (task: Task) => void;
  buttonText?: string;
}

const TaskCard = (props: TaskCardProps) => {
  const { className, task, onChange, buttonText = "Далее" } = props;

  let form: ReactElement | null = null;

  if (!task) return null;

  switch (task.type) {
    case "single_select":
      form = (
        <TaskSingleSelectForm
          task={task}
          onChange={onChange}
          buttonText={buttonText}
        />
      );
      break;
    case "multy_select":
      form = (
        <TaskMultySelectForm
          task={task}
          onChange={onChange}
          buttonText={buttonText}
        />
      );
      break;
    case "short_text":
      form = (
        <TaskShortTextForm
          task={task}
          onChange={onChange}
          buttonText={buttonText}
        />
      );
      break;
    case "long_text":
      form = (
        <TaskLongTextForm
          task={task}
          onChange={onChange}
          buttonText={buttonText}
        />
      );
      break;
  }

  return (
    <Card className={classNames(className, "w-full")}>
      <Flex gap={20} vertical>
        <Title level={5}>{task.description}</Title>
        {form}
      </Flex>
    </Card>
  );
};

const Memoized = memo(TaskCard);

export { Memoized as TaskCard };
