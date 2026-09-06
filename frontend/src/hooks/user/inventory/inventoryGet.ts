"use client"

import { useQuery } from "@tanstack/react-query"
import { GetInventoryApi } from "../../../api/user/inventory/inventoryGet"

// 在庫情報の取得
export const GetInventoryHook = () => {

  return useQuery({
    queryKey: ["inventories"],
    queryFn: GetInventoryApi,

    staleTime: 1000 * 60,
    gcTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false
  });
};