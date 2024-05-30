import { Flex, Layout, Typography } from "antd";
import "./App.css";
import { Header, Content } from "antd/es/layout/layout";

import { Outlet } from "react-router-dom";

import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { selectTest } from "@/entity/Test";

const { Text, Title } = Typography;

function App() {
  const test = useAppSelector(selectTest);

  return (
    <Layout className="h-screen">
      <Layout className="h-screen overflow-y-auto relative">
        <Header className="bg-white sticky top-0 z-10">
          <Flex align="center" justify="center" gap={30} className="h-full">
            <Title level={3} style={{ margin: 0 }}>
              {test.name}
            </Title>
            {test.time && (
              <Text className="p-2 border rounded-md border-gray-900 ">
                {test.time}
              </Text>
            )}
          </Flex>
        </Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
