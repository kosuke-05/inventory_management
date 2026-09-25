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
    id: number | null,
    created_at: string | null,
    updated_at: string | null,
    deleted_at: string | null
    memo?: string | undefined
  },
  setInventoryData: (data: inventoryDataType) => void,

  // 在庫削除の際の情報管理
  inventoryId: number | null,
  setInventoryId: (id: number) => void,

  // 在庫詳細ダイアログの削除ボタンが押下されたか否かの判定
  inventoryDetailDeleteButtonTrigger: boolean,
  setInventoryDetailDeleteButtonTrigger: (bool: boolean) => void
};