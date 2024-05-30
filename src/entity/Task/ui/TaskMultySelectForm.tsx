import { Form, Button, Checkbox } from "antd";
import { memo } from "react";
import { Task, TaskMultySelect } from "../model/types";

interface TaskMultySelectFormProps {
  className?: string;
  task?: TaskMultySelect | null;
  onChange?: (task: Task) => void;
  buttonText?: string;
}

const TaskMultySelectForm = (props: TaskMultySelectFormProps) => {
  const { className, buttonText, task, onChange } = props;

  const onFinish = ({ value }: { value: string[] }) => {
    if (task) {
      onChange?.({ ...task, value });
    }
  };

  return (
    <Form onFinish={onFinish} className={className}>
      <Form.Item name="value" rules={[{ required: true }]}>
        <Checkbox.Group options={task?.variants} />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">{buttonText}</Button>
      </Form.Item>
    </Form>
  );
};

const Memoized = memo(TaskMultySelectForm);

export { Memoized as TaskMultySelectForm };
