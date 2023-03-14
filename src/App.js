import React, { useState } from "react";
import refresh from "./images/refresh.png";
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
import { Avatar, Card } from "antd";
const { Meta } = Card;

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
  height: 65,
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
      <Header style={headerStyle}>
        <Row justify="center" style={{ height: "100%" }}>
          <Col
            xs={4}
            sm={4}
            md={6}
            lg={8}
            xl={10}
            style={{ textAlign: "right" }}
          >
            نام سازمان
          </Col>
          <Col xs={16} sm={16} md={12} lg={8} xl={4}>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              style={{ width: "100px", marginTop: 2, borderRadius: 5 }}
            />
          </Col>
          <Col xs={4} sm={4} md={6} lg={8} xl={10}></Col>
        </Row>
      </Header>
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
                  <Input maxLength={150} />
                </Form.Item>
                <Divider />
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
                  <Input.Password maxLength={200} placeholder="******" />
                </Form.Item>
                <Divider />
                <Form.Item
                  name="captcha"
                  label="حروف تصویر"
                  rules={[
                    {
                      required: true,
                      message: "حروف تصویر نمی تواند خالی باشد",
                    },
                  ]}
                >
                  <Row align="middle">
                    <Col
                      span={12}
                      className="gutter-row"
                      xs={24}
                      sm={24}
                      md={24}
                      lg={12}
                      xl={12}
                    >
                      <Input placeholder="" maxLength={10} />
                    </Col>
                    <Col
                      span={12}
                      className="gutter-row"
                      xs={24}
                      sm={24}
                      md={24}
                      lg={12}
                      xl={12}
                      style={{ textAlign: "center" }}
                    >
                      <div className="space-align-block">
                        <Space align="center">
                          <img
                            src="https://www.researchgate.net/profile/Jonathan-Aigrain/publication/277007505/figure/fig3/AS:667814067204096@1536230689050/Example-of-a-Yahoo-captcha-that-uses-the-negative-kerning.png"
                            style={{ maxHeight: "32px" }}
                          />
                          <img
                            src={refresh}
                            title="تصویر جدید"
                            style={{ maxHeight: "15px", cursor: "pointer" }}
                          />
                        </Space>
                      </div>
                    </Col>
                  </Row>
                </Form.Item>
                <Divider />
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
