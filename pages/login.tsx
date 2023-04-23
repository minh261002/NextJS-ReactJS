import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input } from "antd";
import { LoginPayload } from "../models";
import LayoutMain from "@/component/Layout/LayoutMain";
import { useMutation, useQuery } from "@tanstack/react-query";
import authApi from "../api/auth-api";
import Cookies from "js-cookie";
export default function LoginPage(props: any) {
  const onFinish = (values: LoginPayload) => {};
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const token = Cookies.get("accessToken")!;

  return (
    <>
      <Head>
        <title>Đăng nhập</title>
        <meta name="description" content="Đăng nhập tài khoản" />
      </Head>
      <h1>Trang đăng nhập</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="identifier"
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
      <Link href={"/register"}>Chuyển sang trang đăng ký</Link>
      <Button
        type="ghost"
        htmlType="submit"
        onClick={() => {
          Cookies.remove("accessToken");
        }}
      >
        Log out
      </Button>
    </>
  );
}
