"use client"

import { create } from "zustand";
import type { InventoryStoreType } from "../../types/store/inventoryStoreType";
import { persist } from "zustand/middleware";
import type { inventoryDataType } from "../../types/inventory/inventoryTypes";

export const InventoryStore = create<InventoryStoreType>()(
  persist(
    (set) => ({
      errorMessage: null,
      setErrorMessage: (msg: string) => set({ errorMessage: msg }),
      resetErrorMessage: () => set({ errorMessage: null }),

      inventoryDetailDialog: false,
      setInventoryDetailDialog: (bool: boolean) => set({ inventoryDetailDialog: bool }),

      inventoryData: {
        id: null,
        created_at: null,
        updated_at: null,
        deleted_at: null,
        memo: undefined
      },
      setInventoryData: (data: inventoryDataType) => set({ inventoryData: data }),

      inventoryId: null,
      setInventoryId: (id: number) => set({ inventoryId: id }),

      inventoryDetailDeleteAlertTrigger: false,
      setInventoryDetailDeleteAlertTrigger: (bool: boolean) => set({ inventoryDetailDeleteAlertTrigger: bool })
}),
    {
      name: "local-storage"
    }
  )
);