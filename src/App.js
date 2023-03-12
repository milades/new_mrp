import React, { useState } from "react";
import ReactCaptcha from "modern-react-captcha";
import "./components/public/Captcha.css";
import logo from "./logo.svg";
import "./App.css";
import { Button, Checkbox, Form, Input, Layout, Space, Col, Row } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
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
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#FFF",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

const App = () => {
  let captchaMatched = false;

  const handleSuccess = () => {
    captchaMatched = true;
  };

  const handleFailure = () => {
    captchaMatched = false;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (captchaMatched) {
      alert("Form submitted successfully...");
    } else {
      alert("Submission failed! Captcha did not match...");
    }
  };
  return (
    <Space
      direction="vertical"
      style={{
        width: "100%",
      }}
    >
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <Row>
            <Col span={8}></Col>
            <Col
              span={8}
              style={{
                padding: "0 24px",
                minHeight: 280,
              }}
            >
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                style={{
                  width: 100 + "%",
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
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

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                  style={{
                    textAlign: "right",
                    width: 100 + "%",
                  }}
                >
                  <Checkbox>مرا بخاطر بسپار</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                  style={{
                    textAlign: "right",
                    width: 100 + "%",
                  }}
                >
                  <ReactCaptcha
                    charset="l/L"
                    length={6}
                    color="white"
                    bgColor="black"
                    reload={true}
                    reloadText="Reload Captcha"
                    //reloadIcon={reloadIcon}
                    handleSuccess={handleSuccess}
                    handleFailure={handleFailure}
                  />
                </Form.Item>

                <Form.Item
                  style={{ textAlign: "right" }}
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleSubmit}
                  >
                    ورود
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  );
};
export default App;
