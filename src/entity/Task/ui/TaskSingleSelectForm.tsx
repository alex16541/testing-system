import { memo } from "react";
import { Button, Form, Radio } from "antd";
import { Task } from "..";
import { TaskSingleSelect } from "../model/types";

interface TaskSingleSelectFormProps {
  className?: string;
  task?: TaskSingleSelect | null;
  onChange?: (task: Task) => void;
  buttonText?: string;
}

const TaskSingleSelectForm = (props: TaskSingleSelectFormProps) => {
  const { className, buttonText, task, onChange } = props;

  const onFinish = ({ value }: { value: string }) => {
    if (task) {
      onChange?.({ ...task, value });
    }
  };

  return (
    <Form onFinish={onFinish} className={className}>
      <Form.Item name="value" rules={[{ required: true }]}>
        <Radio.Group options={task?.variants} value={task?.value} />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit">{buttonText}</Button>
      </Form.Item>
    </Form>
  );
};

const Memoized = memo(TaskSingleSelectForm);

export { Memoized as TaskSingleSelectForm };
