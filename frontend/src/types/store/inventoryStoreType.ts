export type InventoryStoreType = {
  errorMessage: string | null,
  setErrorMessage: (msg: string) => void,
  resetErrorMessage: () => void,

  // 在庫情報の詳細を表示するダイアログのトリガー
  inventoryDetailDialog: boolean,
  setInventoryDetailDialog: (bool: boolean) => void
};