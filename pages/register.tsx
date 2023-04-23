import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input } from "antd";
import LayoutMain from "@/component/Layout/LayoutMain";
import { useMutation } from "@tanstack/react-query";
import { RegisterPayload } from "../models";
import authApi from "../api/auth-api";
export default function RegisterPage(props: any) {
  const registerAccountMutation = useMutation({
    mutationFn: (body: RegisterPayload) => authApi.registerAccount(body),
  });
  const onFinish = (values: RegisterPayload) => {
    registerAccountMutation.mutate(values, {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {},
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LayoutMain>
      <Head>
        <title>Đăng ký</title>
        <meta name="description" content="Đăng ký tài khoản vào dự án" />
      </Head>
      <h1>Trang đăng ký</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="ghost" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Link href={"/login"}>Chuyển sang trang đăng nhập</Link>
    </LayoutMain>
  );
}
