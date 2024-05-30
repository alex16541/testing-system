import { memo } from "react";
import { Task, TaskShortText } from "../model/types";
import { Button, Form, Input } from "antd";

interface TaskShortTextFormProps {
  className?: string;
  task?: TaskShortText | null;
  onChange?: (task: Task) => void;
  buttonText?: string;
}

const TaskShortTextForm = (props: TaskShortTextFormProps) => {
  const { className, buttonText, task, onChange } = props;

  const onFinish = ({ value }: { value: string }) => {
    if (task) {
      onChange?.({ ...task, value });
    }
  };

  return (
    <Form onFinish={onFinish} className={className}>
      <Form.Item name="value" rules={[{ required: true }]}>
        <Input value={task?.value} />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">{buttonText}</Button>
      </Form.Item>
    </Form>
  );
};

const Memoized = memo(TaskShortTextForm);

export { Memoized as TaskShortTextForm };
