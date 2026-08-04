import zod from "zod";
import type { UserCertificationValidations } from "../../schemas/userValidation";
import type { UserRegistrationValidation } from "../../schemas/userRegistrationValidation";

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