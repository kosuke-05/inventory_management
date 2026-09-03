"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InventoryPostApi } from "../../../api/user/inventory/inventoryPost";

// 在庫情報の登録
export const InventoryPostHook = () => {
  // キャッシュ操作の用意
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: InventoryPostApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventories"] });
    },

    onError: () => {

    }
  })
}