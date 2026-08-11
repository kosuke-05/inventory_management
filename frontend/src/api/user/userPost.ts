"use client"

import type { UserRegistrationValidationType } from "../../types/user/userType";

// ユーザー登録
export const UserPostApi = async (data: UserRegistrationValidationType) => {
  // バックエンドへの送信
  const result = await fetch("", {
    method: "POST",
    headers: { "Content-Type" : "application/json" },
    body: JSON.stringify(data)
  });

  return result.json();
};