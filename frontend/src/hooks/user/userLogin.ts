"use client"

import { useMutation } from "@tanstack/react-query"
import { UserLoginApi } from "../../api/user/userLogin";

// ログイン処理
export const UserLoginHook = () => {
  
  return useMutation({
    mutationFn: UserLoginApi,

    onSuccess: () => {

    },

    onError: () => {

    }
  })
};