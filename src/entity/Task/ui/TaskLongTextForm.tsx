import { Form, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { memo } from "react";
import { Task, TaskLongText } from "../model/types";

interface TaskLongTextFormProps {
  className?: string;
  task?: TaskLongText | null;
  onChange?: (task: Task) => void;
  buttonText?: string;
}

const TaskLongTextForm = (props: TaskLongTextFormProps) => {
  const { className, buttonText, task, onChange } = props;

  const onFinish = ({ value }: { value: string }) => {
    if (task) {
      onChange?.({ ...task, value });
    }
  };

  return (
    <Form onFinish={onFinish} className={className}>
      <Form.Item name="value" rules={[{ required: true }]}>
        <TextArea value={task?.value} />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">{buttonText}</Button>
      </Form.Item>
    </Form>
  );
};

const Memoized = memo(TaskLongTextForm);

export { Memoized as TaskLongTextForm };
