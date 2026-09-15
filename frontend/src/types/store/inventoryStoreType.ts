import type { inventoryDataType } from "../inventory/inventoryTypes";

export type InventoryStoreType = {
  errorMessage: string | null,
  setErrorMessage: (msg: string) => void,
  resetErrorMessage: () => void,

  // 在庫情報の詳細を表示するダイアログのトリガー
  inventoryDetailDialog: boolean,
  setInventoryDetailDialog: (bool: boolean) => void,

  // カードの詳細ボタン押下後に特定の在庫情報を渡す
  inventoryData: {
    created_at: string | null,
    updated_at: string | null,
    deleted_at: string | null
    memo?: string | undefined
  },
  setInventoryData: (data: inventoryDataType) => void
};