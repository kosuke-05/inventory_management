"use client"

import { useMutation } from "@tanstack/react-query"
import { UserLoginApi } from "../../api/user/userLogin";
import { UserStore } from "../../stores/user/userStore";

// ログイン処理
export const UserLoginHook = () => {
  // ストアから取得
  const setUser = UserStore((state) => state.setUser);
  const user = UserStore((state) => state.user);

  return useMutation({
    mutationFn: UserLoginApi,

    onSuccess: (res) => {
      // ログイン情報を渡す
      setUser({
        name: res.data.name,
        mailAddress: res.data.mailAddress
      })

      console.log(`
          名前：${user?.name}
          メールアドレス：${user?.mailAddress}
        `);
    },

    onError: () => {
      // ログインに失敗した場合、メッセージをUIで表示予定
    }
  })
};