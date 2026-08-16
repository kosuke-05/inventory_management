"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UserPostApi } from "../../api/user/userPost";
import type { UserRegistrationErrorHook, UserRegistrationSuccessHook } from "../../types/user/userType";

// ユーザー登録
export const UserPostHook = () => {
  // キャッシュ操作の準備
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UserPostApi,

    onSuccess: (res: UserRegistrationSuccessHook) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });

      // 返ってきた値を今後使用するため、一旦保留
    },

    onError: (res: UserRegistrationErrorHook) => {
      // 返ってきた値を今後使用するため、一旦保留
    }
  })
}