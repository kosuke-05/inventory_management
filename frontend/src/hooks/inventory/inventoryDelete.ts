"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { DeleteInventoryApi } from "../../api/inventory/inventoryDelete";
import { InventoryStore } from "../../stores/inventory/inventoryStore";

// 在庫削除
export const DeleteInventoryHook = () => {
  // キャッシュの操作
  const queryClient = useQueryClient();

  // ストアから取得
  const setInventoryDetailDeleteAlertTrigger = InventoryStore((state) => state.setInventoryDetailDeleteAlertTrigger);

  return useMutation({
    mutationFn: (id: number) => DeleteInventoryApi(id),

    onSuccess: () => {
      console.log("hookの成功デバッグ");
      
      queryClient.invalidateQueries({ queryKey: ["inventories"] });
      setInventoryDetailDeleteAlertTrigger(false);
    },

    onError: (res) => {
      // エラーメッセージの設定
    }
  })
}