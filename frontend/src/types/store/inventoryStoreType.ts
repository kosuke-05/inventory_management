export type InventoryStoreType = {
  errorMessage: string | null,
  setErrorMessage: (msg: string) => void,
  resetErrorMessage: () => void
};