"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { UserPostApi } from "../../api/user/userPost";

// ユーザー登録
export const UserPostHook = () => {
  // キャッシュ操作の準備
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UserPostApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    }
  })
}