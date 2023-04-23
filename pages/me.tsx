import { useQuery } from "@tanstack/react-query";
import React from "react";
import authApi from "../api/auth-api";
import Cookies from "js-cookie";

type meProps = {};
export default function me(props: meProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const token = Cookies.get("accessToken")!;
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div>
      <p>Thông tin người dùng</p>
    </div>
  );
}
