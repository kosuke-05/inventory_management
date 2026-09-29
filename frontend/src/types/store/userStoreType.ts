import type { UserInformationType } from "../user/userType"

// ログイン・新規登録したユーザー情報を扱うストア
export type UserStoreType = {
  user: UserInformationType | null,
  setUser: (user: UserInformationType) => void,
  resetUser: () => void,

  // ログイン処理の際のエラーメッセーを管理
  errorMessageTrigger: boolean,
  setErrorMessageTrigger: (bool: boolean) => void,
  errorMessage: string | null,
  setErrorMessage: (msg: string | null) => void,
  resetErrorMessage: () => void
};