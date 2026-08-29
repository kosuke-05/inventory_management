"use client"

import { useMutation } from "@tanstack/react-query"
import { UserLoginApi } from "../../api/user/userLogin";
import { UserStore } from "../../stores/user/userStore";
import { useNavigate } from "react-router-dom";

// ログイン処理
export const UserLoginHook = () => {
  // ストアから取得
  const setUser = UserStore((state) => state.setUser);
  const setErrorMessage = UserStore((state) => state.setErrorMessage);

  // 画面遷移
  const navigate = useNavigate();

  return useMutation({
    mutationFn: UserLoginApi,

    onSuccess: (res) => {
      // ログイン情報を渡す
      setUser({
        name: res.data.name,
        mailAddress: res.data.mailAddress
      })

      console.log(`
          名前：${res.data.name}
          メールアドレス：${res.data.mailAddress}
        `);

      // 在庫一覧画面に遷移
      navigate("/products");
    },

    onError: (res) => {
      // エラーメッセージを渡す
      setErrorMessage(res.message);
    }
  })
};