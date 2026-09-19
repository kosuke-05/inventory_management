"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { DeleteInventoryApi } from "../../../api/user/inventory/inventoryDelete";

// 在庫削除
export const DeleteInventoryHook = () => {
  // キャッシュの操作
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => DeleteInventoryApi(),

    onSuccess: () => {

    }
  })
}