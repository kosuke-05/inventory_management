"use client"

import { useMutation } from "@tanstack/react-query"
import { UpdateInventoryApi } from "../../api/inventory/inventoryUpdate";

// 在庫情報の編集
export const InventoryUpdateHook = () => {

  return useMutation({
    mutationKey: ["inventories"],
    mutationFn: UpdateInventoryApi,

    onSuccess: () => {

    },

    onError: () => {

    }
  });
};