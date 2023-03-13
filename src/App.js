import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Layout,
  Space,
  Col,
  Row,
  Divider,
} from "antd";

const { Header, Footer, Sider, Content } = Layout;
const style = {
  padding: "8px 0",
};
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const bottomStyle = {
  width: "100%",
};
const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
const contentStyle = {
  padding: "10 20 10 20",
  // margin: "24px 16px 0",
  padding: "0 50px",
  height: "100%",
  overflow: "initial",
  width: "100%",
  // minHeight: auto,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#FFF",
  height: "100%",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
  width: "500",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};
const rowStyle = {
  height: "80%",
};
const layoutStyle = {
  height: "100vh",
};
const App = () => {
  let captchaMatched = false;

  const handleSuccess = () => {
    captchaMatched = true;
  };

  const handleFailure = () => {
    captchaMatched = false;
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>
        <Row justify="center" align="middle" style={rowStyle}>
          <Divider orientation="center">ورود به حساب کاربری</Divider>
          <Col className="gutter-row" xs={4} sm={1} md={1} lg={2} xl={3}>
            <div style={style}></div>
          </Col>
          <Col className="gutter-row" xs={8} sm={10} md={10} lg={8} xl={6}>
            <div style={style}>
              <Form
                layout="vertical"
                name="basic"
                style={{
                  width: "100%",
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                labelAlign="right"
              >
                <Form.Item
                  label="نام کاربری"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "نام کاربری نمی تواند خالی باشد",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="رمز عبور"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "رمز عبور نمی تواند خالی باشد",
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>مرا بخاطر بسپار</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" style={bottomStyle}>
                    ورود
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col className="gutter-row" xs={4} sm={1} md={1} lg={2} xl={3}>
            <div style={style}></div>
          </Col>
        </Row>
      </Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
};
export default App;
