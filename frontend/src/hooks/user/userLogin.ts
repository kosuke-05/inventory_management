"use client"

import { useMutation } from "@tanstack/react-query"
import { UserLoginApi } from "../../api/user/userLogin";

// ログイン処理
export const UserLoginHook = () => {
  
  return useMutation({
    mutationFn: UserLoginApi,

    onSuccess: () => {
      // ストアにログイン情報を保存予定
    },

    onError: () => {
      // ログインに失敗した場合、メッセージをUIで表示予定
    }
  })
};