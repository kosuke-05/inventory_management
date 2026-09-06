"use client"

import { create } from "zustand";
import type { InventoryStoreType } from "../../types/store/inventoryStoreType";
import { persist } from "zustand/middleware";

export const InventoryStore = create<InventoryStoreType>()(
  persist(
    (set) => ({
      errorMessage: null,
      setErrorMessage: (msg: string) => set({ errorMessage: msg }),
      resetErrorMessage: () => set({ errorMessage: null })
    }),
    {
      name: "local-storage"
    }
  )
)