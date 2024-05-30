import dayjs from "dayjs";
import { memo, useCallback, useEffect } from "react";

import classNames from "classnames";
import { useAppSelector } from "@/shared/hooks/useAppSelector";

import { Flex, Steps, Typography } from "antd";
import { TestActions, selectTest } from "@/entity/Test";
import { Task, TaskCard } from "@/entity/Task";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";

const { Title } = Typography;

interface MainPageProps {
  className?: string;
}

const timeFormat = "HH:mm:ss";

const MainPage = (props: MainPageProps) => {
  const { className } = props;
  const test = useAppSelector(selectTest);
  const steps = test.tasks.map((t) => ({ description: t.description }));
  const task = test.tasks[test.currentTask];
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(TestActions.setIsLoading(true));
    dispatch(TestActions.initeState());
    dispatch(TestActions.setIsLoading(false));
    dispatch(TestActions.setStatus("in_progress"));
  }, []);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (!test.isLoading && test.time) {
      let time = dayjs(test.time, timeFormat);

      interval = setInterval(() => {
        time = time.subtract(1, "second");
        dispatch(TestActions.setTime(time.format(timeFormat)));
      }, 1000);

      if (
        time.format(timeFormat) === "00:00:00" ||
        test.currentTask >= test.tasks.length
      ) {
        clearInterval(interval);
        dispatch(TestActions.setCurrentTask(test.tasks.length + 1));
        dispatch(TestActions.setStatus("complited"));
      }
    }

    return () => {
      if (interval) {
        clearTimeout(interval);
      }
    };
  }, [
    test.isLoading,
    dispatch,
    test.time,
    test.currentTask,
    test.tasks.length,
  ]);

  const onChangeTask = useCallback(
    (task: Task) => {
      dispatch(TestActions.setTask(task));
      dispatch(TestActions.nextTask());
    },
    [dispatch],
  );

  if (test.isLoading) return <Title level={1}>Загрузка...</Title>;

  if (test.status === "complited")
    return (
      <Flex className="mx-auto h-full" justify="center" align="center">
        <Title level={1}>Тест закончен.</Title>
      </Flex>
    );

  return (
    <Flex
      vertical
      gap={10}
      className={classNames(className, "mx-auto max-w-5xl p-5")}
    >
      <Steps progressDot current={test.currentTask} items={steps} />
      <TaskCard task={task} onChange={onChangeTask} />
    </Flex>
  );
};

const Memoized = memo(MainPage);

export { Memoized as MainPage };
