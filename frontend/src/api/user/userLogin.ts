"use client"

import type { UserRegistrationInitialValue } from "../../types/user/userType"

// ログイン処理
export const UserLoginApi = async (data: Omit<UserRegistrationInitialValue, "name">) => {
  const res = await fetch("http://localhost:3001/user/login", {
    method: "POST",
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify(data)
  });

  return res.json();
}