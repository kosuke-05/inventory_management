import type { UserInformationType } from "../user/userType"

// ログイン・新規登録したユーザー情報を扱うストア
export type UserStoreType = {
  user: UserInformationType | null,
  setUser: (user: UserInformationType) => void,
  resetUser: () => void,

  // ログイン処理の際のエラーメッセーを管理
  errorMessage: string | null,
  setErrorMessage: (msg: string) => void,
  resetErrorMessage: () => void
};