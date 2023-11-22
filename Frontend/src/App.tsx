import { Alert, Button, Flex, Form, Input, Radio, Space, Typography } from 'antd';
import './App.css';
import StudentLayout from './modules/common/StudentLayout';

function App() {
  return (
    <>
      <StudentLayout>
        <Typography.Title level={1}>Student view</Typography.Title>
        <Flex gap="small" wrap="wrap">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </Flex>
        <Form layout="horizontal" initialValues={{ layout: 'horizontal' }}>
          <Form.Item label="Form Layout" name="layout">
            <Radio.Group>
              <Radio.Button value="horizontal">Horizontal</Radio.Button>
              <Radio.Button value="vertical">Vertical</Radio.Button>
              <Radio.Button value="inline">Inline</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Field A">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item label="Field B">
            <Input placeholder="input placeholder" />
          </Form.Item>
          <Form.Item>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert message="Success Text" type="success" />
          <Alert message="Warning Text" type="warning" />
          <Alert message="Error Text" type="error" />
        </Space>
      </StudentLayout>

      
    </>
  );
}

export default App;
