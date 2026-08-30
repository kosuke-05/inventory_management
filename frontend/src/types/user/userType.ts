import zod from "zod";
import type { UserCertificationValidations } from "../../schemas/user/userValidation";
import type { UserRegistrationValidation } from "../../schemas/user/userRegistrationValidation";

// 【トップ画面】メールアドレス・パスワードの認証
export type UserCertificationValidationType = zod.infer<typeof UserCertificationValidations>;

// ユーザー新規登録
export type UserRegistrationValidationType = zod.infer<typeof UserRegistrationValidation>;

// UserRegistrationButtonのprops
export type UserRegistrationButtonPropsType = {
  onClick: () => void
};

// ReturnTopPageのprops
export type ReturnTopPagePropsType = {
  onClick: () => void
};

// ユーザー登録のhooks層（通信成功）で受け取る型
export type UserRegistrationSuccessHook = {
  data: {
    name: string,
    mailAddress: string
  },
  message: string
};

// ユーザー登録のhooks層（通信成功）で受け取る型
export type UserRegistrationErrorHook = {
  message: string
};

// ユーザー新規登録のテキストフィールドの初期値
export type UserRegistrationInitialValue = {
  name: string,
  mailAddress: string,
  passWord: string
};

// ストアで扱うユーザー情報
export type UserInformationType = {
  name: string,
  mailAddress: string
};