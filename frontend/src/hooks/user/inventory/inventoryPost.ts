"use client"

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { InventoryPostApi } from "../../../api/user/inventory/inventoryPost";
import { useNavigate } from "react-router-dom";
import { InventoryStore } from "../../../stores/inventory/inventoryStore";

// 在庫情報の登録
export const InventoryPostHook = () => {
  // キャッシュ操作の用意
  const queryClient = useQueryClient();

  // 画面遷移
  const navigate = useNavigate();

  // ストアから取得
  const setErrorMessage = InventoryStore((state) => state.setErrorMessage);

  return useMutation({
    mutationFn: InventoryPostApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inventories"] });

      navigate("/inventories");
    },

    onError: (res) => {
      // エラーメッセージを渡す
      setErrorMessage(res.message);
    }
  })
}